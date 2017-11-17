import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../services/http.service';
import { HelperService } from '../services/helper.service';
import { IMyDpOptions } from 'mydatepicker';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  data: any = {}

  datePickerOptions: IMyDpOptions = {
    dateFormat: 'dd-mm-yyyy',
    minYear: 2017,
    maxYear: 2017,
    disableSince: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1
    }
  };

  constructor(private helperService: HelperService, private httpService: HTTPService) { }

  ngOnInit() { }

  dateChanged(event: any) { }

  onSubmit(form) {
    let data = form.value;
    console.log('onSubmit')
    console.log(data.firstName);

    //form.form.reset();
    //this.helperService.errorNotification('Invalid Data.');
    
    this.httpService.updateData({})
      .then(data => {
        console.log(data)
      }, error => {
        console.error(error);
        this.helperService.errorNotification(error);
      });
  }
}
