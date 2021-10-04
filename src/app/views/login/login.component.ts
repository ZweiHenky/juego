import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/services/cargarScript/cargar-script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptService) {
    _CargaScripts.Carga(["login"])
   }

  ngOnInit(): void {
  }

}
