import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  lon: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then( res => {
      this.lat= res.coords.latitude;
      this.lon= res.coords.longitude;
      console.log(this.lat, this.lon);
    });
  }

}
