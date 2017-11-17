import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  @Input() amount;
  @Input() duration;
  @Input() purpose;

  constructor() { }

}
