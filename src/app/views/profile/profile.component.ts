import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MeI } from 'src/app/models/me.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api:ApiService, public http: HttpClient) { }

  usuario:string="";
  email:string="";
  nombre:string="";
  apellido:string="";

  ngOnInit(): void {
    this.api.me().subscribe(data =>{
      this.usuario = data.username;
      this.email = data.email;
      this.nombre = data.first_name;
      this.apellido = data.last_name;
    })
  }

}
