import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService, MessageService } from '../_services/index';

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
    private router: Router,
    private route: ActivatedRoute ,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login(): void {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.messageService.error(error);
                this.loading = false;
            });
  }

}
