import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { HTTPService } from '../services/http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  data: any = {};

  constructor(private helperService: HelperService, private httpService: HTTPService) { }

  ngOnInit() {
    this.httpService.getData()
      .then(data => {
        this.data = data;
        console.log(this.data)
      }, error => {
        console.error(error);
        this.helperService.errorNotification(error);
      });
  }

}
