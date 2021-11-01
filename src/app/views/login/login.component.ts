import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargarScriptService } from 'src/app/services/cargarScript/cargar-script.service';
import { ApiService } from 'src/app/services/api/api.service'; 
import { LoginI } from 'src/app/models/login.interface';
import { Router } from '@angular/router';
import {ResponseI} from  '../../models/response.interface';
import { registerI } from 'src/app/models/register.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required) 
  })

  registerForm = new FormGroup({
    email : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl('')
  })

  constructor(private _CargaScripts:CargarScriptService, private api:ApiService, private router:Router) {
    _CargaScripts.Carga(["login"])
  }

  errorStatus:Boolean = false;
  errorMsj:any = ""; 

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if (localStorage.getItem('token')) {
      this.router.navigate(['index']);
    }
  }

  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if (dataResponse.status == 'ok') {
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['index']);
      }else{
        this.errorStatus=true;
        this.errorMsj = dataResponse.error;
      }
    })
  }

  registerUser(form:registerI){
      return this.api.registerNewUser(form).subscribe(data => {
        console.log(data);
      })
  }

}
