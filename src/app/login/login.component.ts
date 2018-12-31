import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
role : any;
pwd : any;
loginId : any;
wrongCredential : boolean;
constructor(private router : Router) {
  this.wrongCredential = false
 }

  ngOnInit() {
  }
  
  onLogin(){
    debugger
    if(this.loginId == 'cdhamande' && this.pwd == 'cdhamande' && this.role == 'admin'){
      this.router.navigate(['home']);
    }
    else{
      this.wrongCredential = true
    }
  }
}
