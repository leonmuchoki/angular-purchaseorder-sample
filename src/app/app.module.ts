import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SignaturePadModule } from "angular2-signaturepad";

import { AppComponent } from './app.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { MyMaterialModule } from './material.module';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    MyMaterialModule, 
    BrowserAnimationsModule,
    SignaturePadModule 
    ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, PurchaseOrderComponent,SignatureComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
