import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
ngOnInit(): void {
  const localData=localStorage.getItem('signUpUsers');
  if(localData != null){
    this.signUpUsers=JSON.parse(localData);
  }
}
signUpUsers:any[]=[];
signUpObj:any={userName:'',email:'',password:''};
loginObj:any={
  userName:'',
  password:''
}
onSignUp(){
if(this.signUpUsers!= null ){
this.signUpUsers.push(this.signUpObj);
console.log(this.signUpUsers);

localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
this.signUpObj={userName:'',email:'',password:''}
}
}
onLogin(){
  const isUserExist=this.signUpUsers.find(m=>m.userName == this.loginObj.userName && m.password==this.loginObj.password);
  if(isUserExist !=undefined){
    alert('user logged in sucessfully');
  }
 else{ alert('wrong email or password');
 }
}
}
