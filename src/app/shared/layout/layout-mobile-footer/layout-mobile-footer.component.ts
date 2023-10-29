import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation/navigation.service';
import { NavigationLink } from '../../navigation/navigationlinks.model';

@Component({
  selector: 'app-layout-mobile-footer',
  templateUrl: './layout-mobile-footer.component.html',
  styleUrls: ['./layout-mobile-footer.component.css']
})
export class LayoutMobileFooterComponent implements OnInit {
  today: number = Date.now();
  public version = 'version';
  constructor(private navigationService: NavigationService) { }
  links: NavigationLink[];
  ngOnInit(): void {
    this.links = this.navigationService.getLinks("main-navigation");
  }

}
