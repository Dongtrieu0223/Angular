import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserSevices {

  constructor() { }
  public name='';
  public email='';
  public password='';
  public rePassword=''
  listUser :User[]=[];
  registry(){
    let user= new User();
    user.name=this.name
    user.email=this.email
    user.password=this.password
    // console.log(user.name);
    // console.log(user.email);
    // console.log(user.password);
    this.listUser.push(user);
    console.log(this.listUser)
    console.log('dang ky')
  }
}
