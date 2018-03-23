import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  login(data): void {
    console.log(data.uname + "---" + data.passwd);
    if (data.uname == "admin" && data.passwd == "12345"){
      alert("Login Success!");
      this.router.navigate(["home"]);
    } else {
      alert("Invalid login");
    }
  }

}
