import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string= 'Piggy Bill';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth();
  }

  isAuth(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logoutUser();
  }

}
