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
    this.client.isMobileBlackberry = clientJS.isMobileBlackBerry();
    this.client.isMobileIOS = clientJS.isMobileIOS();
    this.client.isMobileWindows = clientJS.isMobileWindows();
    this.client.isJavaInstalled = clientJS.isJava();
    this.client.javaVersion = clientJS.getJavaVersion();
    this.client.fingerprint = clientJS.getFingerprint();
    this.client.userAgent = clientJS.getUserAgent();
    this.client.browser = clientJS.getBrowser();
    this.client.browserVersion = clientJS.getBrowserVersion();
    this.client.browserMajorVersion = clientJS.getBrowserMajorVersion();
    this.client.isIE = clientJS.isIE();
    this.client.isChrome = clientJS.isChrome();
    this.client.isFirefox = clientJS.isFirefox();
    this.client.isSafari = clientJS.isSafari();
    this.client.isOpera = clientJS.isOpera();
    this.client.isMobileSafari = clientJS.isMobileSafari();
    this.client.engine = clientJS.getEngine();
    this.client.engineVersion = clientJS.getEngineVersion();
    this.client.operatingSystem = clientJS.getOS();
    this.client.operatingSystemVersion = clientJS.getOSVersion();
    this.client.isWindows = clientJS.isWindows();
    this.client.isMac = clientJS.isMac();
    this.client.isLinux = clientJS.isLinux();
    this.client.isUbuntu = clientJS.isUbuntu();
    this.client.isSolaris = clientJS.isSolaris();
    this.client.device = clientJS.getDevice();
    this.client.deviceType = clientJS.getDeviceType();
    this.client.deviceVendor = clientJS.getDeviceVendor();
    this.client.cpu = clientJS.getCPU();
    this.client.isMobile = clientJS.isMobile();
    this.client.isMobileMajor = clientJS.isMobileMajor();
    this.client.isMobileOpera = clientJS.isMobileOpera();
    this.client.isIphone = clientJS.isIphone();
    this.client.isIPad = clientJS.isIpad();
    this.client.isIPod = clientJS.isIpod();
    this.client.screenPrint = clientJS.getScreenPrint();
    this.client.colorDepth = clientJS.getColorDepth();
    this.client.currentResolution = clientJS.getCurrentResolution();
    this.client.availableResolution = clientJS.getAvailableResolution();
    this.client.deviceXDPI = clientJS.getDeviceXDPI();
    this.client.deviceYDPI = clientJS.getDeviceYDPI();
    this.client.plugins = clientJS.getPlugins();
    this.client.isFlash = clientJS.isFlash();
    this.client.flashVersion = clientJS.getFlashVersion();
    this.client.isSilverLight = clientJS.isSilverlight();
    this.client.silverlightVersion = clientJS.getSilverlightVersion();
    this.client.isMimeTypesInstalled = clientJS.isMimeTypes();
    this.client.mimeTypes = clientJS.getMimeTypes();
    this.client.fonts = clientJS.getFonts();
    this.client.isLocalStorage = clientJS.isLocalStorage();
    this.client.isSessionStorage = clientJS.isSessionStorage();
    this.client.isCookie = clientJS.isCookie();
    this.client.timezone = clientJS.getTimeZone();
    this.client.language = clientJS.getLanguage();
    this.client.systemlanguage = clientJS.getSystemLanguage();
    this.client.isCanvas = clientJS.isCanvas();
    this.client.canvasPrint = clientJS.getCanvasPrint();
    console.log(this.client);
  }

}
