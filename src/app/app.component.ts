import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.userService.populate();
    const pageToBeRedirected = sessionStorage.getItem('redirectTo');
    if (pageToBeRedirected && pageToBeRedirected !== '') {
      this.router.navigate([pageToBeRedirected]);
      sessionStorage.removeItem('redirectTo');
    }
  }
}
