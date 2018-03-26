import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  logoUri = '../../assets/img/logo.gif';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.user
        .subscribe(user => this.user = user)
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/index']);
  }

}
