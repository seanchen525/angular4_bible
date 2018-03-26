import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, UserService } from '../_services/index'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.messageService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.messageService.error(error);
                this.loading = false;
            });
  }

}
