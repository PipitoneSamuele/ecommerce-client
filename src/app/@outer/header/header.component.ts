import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  hideLogin: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLogged = false;
    this.hideLogin = false;
  }

  activateLogIn() {
    this.hideLogin = true;
    this.router.navigateByUrl("/login");
  }

}
