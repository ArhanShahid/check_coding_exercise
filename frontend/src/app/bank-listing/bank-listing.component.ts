import { Component, Input } from '@angular/core';

@Component({
  selector: 'bank-listing',
  templateUrl: './bank-listing.component.html',
  styleUrls: ['./bank-listing.component.scss']
})
export class BankListingComponent {

  @Input() list;

  constructor() { }

}
