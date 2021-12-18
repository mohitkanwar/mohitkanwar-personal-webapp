import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-box',
  templateUrl: './donation-box.component.html',
  styleUrls: ['./donation-box.component.css']
})
export class DonationBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToPaymentsPage() {
    window.location.href = 'https://pages.razorpay.com/pl_IYpeDTXDxgIxu0/view';
  }
}
