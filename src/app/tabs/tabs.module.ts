import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
// import { CustomtabModule } from '../customtab/customtab.module';s



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    
    
  ],
  exports: [
    TabsPage, // Export the component so it can be used in other modules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line
  declarations: [TabsPage]
})
export class TabsPageModule {}
