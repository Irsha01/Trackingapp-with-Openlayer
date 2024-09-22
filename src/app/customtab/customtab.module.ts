import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomtabComponent } from './customtab.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [CustomtabComponent],
  imports: [CommonModule, IonicModule,RouterModule],
  exports: [CustomtabComponent] // Export it for use in other modules
})
export class CustomtabModule {}
