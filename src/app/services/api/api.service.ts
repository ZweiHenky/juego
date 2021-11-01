import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from  '../../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { MeI } from 'src/app/models/me.interface';
import { AuthInterceptorService } from './auth-interceptor.service';
import { registerI } from 'src/app/models/register.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://juego-nombre.herokuapp.com/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "api/login";
    return this.http.post<ResponseI>(direccion, form); 
  }

  me():Observable<MeI>{
    return this.http.get<MeI>("https://juego-nombre.herokuapp.com/api/me");
  }

  registerNewUser(form:registerI):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/api/register", form);
  }
}


