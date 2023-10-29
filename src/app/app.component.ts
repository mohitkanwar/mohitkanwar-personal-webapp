import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * This is the root component of the application.
 */
export class AppComponent implements OnInit {
  /**
   * Creates an instance of the AppComponent.
   * @param userService - The user service, helps in user context definition
   * @param router - The router service, helps in navigation
   */
  constructor(private userService: UserService,
    private router: Router) {}
 /**
   * Lifecycle hook called when the component is initialized.
   * It populates user data and checks for redirection.
   */
  ngOnInit() {
    this.userService.populate();
    // Redirection check is required when the browser is loaded, and enough information is not available where to lead the user to.
    const pageToBeRedirected = sessionStorage.getItem('redirectTo');
    if (pageToBeRedirected && pageToBeRedirected !== '') {
      this.router.navigate([pageToBeRedirected]);
      sessionStorage.removeItem('redirectTo');
    }
  }
}
