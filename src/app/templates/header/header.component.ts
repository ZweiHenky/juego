import { Component, OnInit } from '@angular/core';
import { ResponseI } from 'src/app/models/response.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }

  sesion = true;

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.sesion;
    } else {
      this.sesion = false;
    }
    
  }

  logout(){
    localStorage.removeItem('token');
  }

  

}
