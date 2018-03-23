import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  logoUri = '../../assets/img/logo.gif';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.user.subscribe(user => this.user = user);
  }

}
