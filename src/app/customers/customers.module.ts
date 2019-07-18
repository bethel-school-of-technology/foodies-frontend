import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
      CustomersComponent
    ],
  providers: [],
})
export class CustomersModule { }
