import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core';
import { NavigationService } from '../navigation/navigation.service';
import { NavigationLink } from '../navigation/navigationlinks.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private navigationService: NavigationService
  ) {}

  currentUser: User;
  links: NavigationLink[];

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.links = this.navigationService.getLinks("main-navigation");
  }
}
