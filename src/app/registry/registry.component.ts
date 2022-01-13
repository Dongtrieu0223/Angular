import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UserHttpService } from '../Services/server-http.service';
// import { ServerUserHttpService } from '../Services/server-http.service';
import { UserSevices } from '../Services/user-sevices.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  public name='';
  public email='';
  public password='';
  public rePassword=''
  listUser :User[]=[];
  constructor(
    private _userService: UserSevices,
    private _userServerServices: UserHttpService,
  ) {
    this.name = _userService.name;
    this.email =  _userService.email;
    this.password = _userService.password
  }

  isAccept=false;

  ngOnInit(): void {

    };
    // them user vao sv
    addUser(){
      const newUser={name:this.name, email:this.email, password: this.password}
      this._userServerServices.addUser(newUser).subscribe((data)=>{
         this.listUser.push()
      })
      alert("dang ky thanh cong");
      this.name=''
      this.email=''
      this.password=''
      this.rePassword=''
    }
  registry(){
    let user= new User();
    user.name=this.name
    user.email=this.email
    user.password=this.password
    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    this._userService.listUser.push(user);
    console.log(this.listUser)
    console.log('dang ky')
  }
}
