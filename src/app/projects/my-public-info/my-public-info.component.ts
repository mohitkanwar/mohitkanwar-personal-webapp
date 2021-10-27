import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ClientJS} from 'clientjs/dist/client.min.js';
import { Client } from './client.model';
@Component({
  selector: 'app-my-public-info',
  templateUrl: './my-public-info.component.html',
  styleUrls: ['./my-public-info.component.css']
})
export class MyPublicInfoComponent implements OnInit {
  client: Client = new Client();

  constructor() { }
  ngOnInit(): void {

    this.populateClientData();
  }
  populateClientData() {
    const clientJS = new ClientJS();
    this.client.isMobile = clientJS.isMobile();
    this.client.isMobileAndroid = clientJS.isMobileAndroid();
    this.client.isMobileBlackberry = clientJS.isMobileBlackberry();
    this.client.isMobileIOS = clientJS.isMobileIOS();
    this.client.isMobileWindows = clientJS.isMobileWindows();
  }

}
