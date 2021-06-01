import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { SignatureComponent } from '../signature/signature.component';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  isLinear = false;
  topFormGroup: FormGroup;
  referenceFormGroup: FormGroup;
  dateFormGroup: FormGroup;
  supplierDetailsFormGroup: FormGroup;
  deliveryFormGroup: FormGroup;
  documentCurrencyFormGroup: FormGroup;
  paymentDetailsFormGroup: FormGroup;
  statusFormGroup: FormGroup;
  actionFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.topFormGroup = this._formBuilder.group({
      createdByCtrl: ['', Validators.required],
      chkTenderCtrl: [true],
      chkDonationCtrl: [false],
      chkisLowValueCtrl: [false],
      chkInternalCtrl: [false],
      chkAdvertCtrl: [false]
    });
    this.referenceFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      selected: [],
      docNoCtrl: [''],
      TenderQuotRefCtrl: [{ value: '', disabled: true }]
    });
    this.dateFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required],
    });
    this.supplierDetailsFormGroup = this._formBuilder.group({
      supplierCtrl: [{ value: '', disabled: true }, Validators.required]
    });
    this.deliveryFormGroup = this._formBuilder.group({});
    this.documentCurrencyFormGroup = this._formBuilder.group({
      priceListCtrl: [],
      priceListVersionCtrl: []
    });
    this.paymentDetailsFormGroup = this._formBuilder.group({
      paymentTermsCtrl: []
    });
    this.statusFormGroup = this._formBuilder.group({
      docStatusCtrl: [],
      totalLinesCtrl: [],
      grandTotalCtrl: []
    });
    this.actionFormGroup = this._formBuilder.group({
      chkMarkPendingCtrl: [false],
      chkRejectCtrl: [false],
      chkActioned: [false]
    });
  }

  onApproveClick() : void {
     this.dialog.open(SignatureComponent);
     //this.dialog.open(DialogElementsExampleDialog);
  }
}

