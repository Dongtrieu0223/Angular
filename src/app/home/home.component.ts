import { getLocaleEraNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UserHttpService } from '../Services/server-http.service';
import { UserSevices } from '../Services/user-sevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers:User[]=[];
  searchByName:string='';
  constructor(private _userServices: UserSevices,
              private _userServerServices: UserHttpService,) {
      this.listUsers=this._userServices.listUser
    }
      ngOnInit(): void {this.getAll()}
      //get tat ca user tu sv
      getAll(){
        this._userServerServices.getListUsers().subscribe((res:any)=>{
          this.listUsers = res
          // console.log(res[0].id)
        })
      }
      // xoa user khoi sv
      deleteUser(id:any):void{
        this._userServerServices.deleteUser(id).subscribe((res:any)=>{
          this.getAll()
        })
        console.log('delete')
      }
      //
      search(input:string){
        this.searchByName=input;
      }
}



