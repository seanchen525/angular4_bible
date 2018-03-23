import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor() { 
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
