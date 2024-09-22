import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currentlocation:any
    isExpanded = false;
    batteryLevel: number = 0;
  isPlugged: boolean = false;

  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheet!: ElementRef;

  constructor(private gestureCtrl: GestureController,private geolocation: Geolocation, private diagnostic: Diagnostic,private batteryStatus: BatteryStatus) {
    this.initializeBatteryStatus();
  }

  ngOnInit() {
    this.loadMap();
    this.addSwipeGesture();
  }

  // Function to load map (optional)
  loadMap() {
    // Add your map loading logic here
  }

  toggleSheet() {
    this.isExpanded = !this.isExpanded;
  }

  addSwipeGesture() {
    if(this.bottomSheet){
      const gesture = this.gestureCtrl.create({
        el: this.bottomSheet.nativeElement,
        threshold: 10,
        gestureName: 'swipe',
        onMove: ev => this.handleSwipe(ev)
      });
      gesture.enable(true);
    }
  
  }

  handleSwipe(ev:any) {
    if (ev.deltaY < -50) {
      // Swipe up
      this.isExpanded = true;
    } else if (ev.deltaY > 50) {
      // Swipe down
      this.isExpanded = false;
    }
  }



  ////////location and ask permission


  getCurrentLocation() {
    this.diagnostic.isLocationEnabled().then(enabled => {
      if (!enabled) {
        // Request to enable location services
        this.diagnostic.switchToLocationSettings();
      } else {
        this.fetchLocation();
      }
    }).catch(err => {
      console.error('Error checking location status', err);
    });
  }

  fetchLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('Latitude:', resp.coords.latitude);
      console.log('Longitude:', resp.coords.longitude);
      this.currentlocation= resp.coords.latitude +'===>'+resp.coords.longitude;
    }).catch((error) => {
      console.error('Error getting location', error);
    });
  }
//////////location end 


///battery

initializeBatteryStatus() {
  this.batteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
    this.batteryLevel = status.level;
    this.isPlugged = status.isPlugged;
    console.log(`Battery Level: ${this.batteryLevel}%`);
    console.log(`Charging: ${this.isPlugged}`);
  });
}
}
