import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargarScriptService } from 'src/app/services/cargarScript/cargar-script.service';
import { ApiService } from 'src/app/services/api/api.service'; 
import { LoginI } from 'src/app/models/login.interface';
import { Router } from '@angular/router';
import {ResponseI} from  '../../models/response.interface';


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

  constructor(private _CargaScripts:CargarScriptService, private api:ApiService, private router:Router) {
    _CargaScripts.Carga(["login"])
   }

  ngOnInit(): void {
  }

  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if (dataResponse.access) {
        localStorage.setItem("access", dataResponse.access);
        this.router.navigate(['index']);
      }
    })
  }

}
