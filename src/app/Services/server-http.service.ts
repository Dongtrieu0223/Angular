import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../model/User.model";

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = ' http://localhost:3000/users';
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private _httpClient: HttpClient) { }
// lay danh sach user tren sv
  getListUsers() {
    return this._httpClient.get(apiUrl).pipe();
  }
// them user vao sv
  addUser(user: User){
    return this._httpClient.post(apiUrl,user).pipe();
  }
// xoa user khoi sv
  deleteUser(id:any){
    return this._httpClient.delete(apiUrl+'/'+id).pipe()
  }
}
