import { Component } from '@angular/core'; // Import Component from the angular core packages

@Component({
  // Add the @Component decorator.
  selector: 'app-user', // Then define the selector and the template file.
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  progress: number = 0; // Progress in percentage
  isHolding: boolean = false;
  interval: any;
  maxTime: number = 3000; // 3 seconds
  circumference: number = 2 * Math.PI * 50; // Circumference of the circle (r=50)
  offset: number = this.circumference;

  constructor() {}

  // Start progress when mouse or touch starts
  startProgress() {
    this.isHolding = true;
    this.progress = 0;
    this.offset = this.circumference;

    // Start filling the progress bar
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 100 / (this.maxTime / 100); // Increase progress over time
        this.offset =
          this.circumference - (this.circumference * this.progress) / 100;
      } else {
        clearInterval(this.interval);
        if (this.progress >= 100) {
          // Show the alert when the progress reaches 100% (after 3 seconds)
          alert('3 seconds have passed! Button has been held long enough.');
        }
      }
    }, 100);
  }

  // Reset progress when mouse or touch is released
  resetProgress() {
    this.isHolding = false;
    clearInterval(this.interval);
    this.progress = 0;
    this.offset = this.circumference;
  }
} // Export the class to use it outside of this file
