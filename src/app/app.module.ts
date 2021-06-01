import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

import { MyMaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, MyMaterialModule, BrowserAnimationsModule ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, PurchaseOrderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
