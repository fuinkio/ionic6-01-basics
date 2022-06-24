import { Component } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx'
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform : Platform,
    // private splashscreen : SplashScreen,
    // private statusBar : StatusBar
  ) {
      this.initializeApp();
    }
  
    initializeApp() {
      // this.platform.ready().then( () => {
      //   this.splashscreen.hide();
      // });
    }
}
