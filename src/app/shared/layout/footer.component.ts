import { Component } from '@angular/core';
import { version } from '../../../../package.json';
@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  today: number = Date.now();
  public version: string = version;
}
