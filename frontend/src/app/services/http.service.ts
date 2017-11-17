import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ConstantService } from './constant.service';


@Injectable()
export class HTTPService {

  constructor(private http: Http, private constant: ConstantService) {}

  getHeaders() { return new Headers({ 'Content-Type': 'application/json'}) }


  getData(): Promise<any> {
    return this.http
      .get(this.constant.api_base_url + '/data', { headers: this.getHeaders() })
      .toPromise()
      .then(this.successHandler.bind(this))
      .catch(this.errorHandler.bind(this));
  }

  updateData(data: any): Promise<any> {
    return this.http
      .put(this.constant.api_base_url + '/data/', { headers: this.getHeaders() })
      .toPromise()
      .then(this.successHandler.bind(this))
      .catch(this.errorHandler.bind(this));
  }

  successHandler(res) {
    if (res.status == 200 && JSON.parse(res._body).status) {
      return Promise.resolve(JSON.parse(res._body).response)
    } else {
      console.log(JSON.parse(res._body).status);
      return Promise.reject(JSON.parse(res._body).error)
    }
  }

  errorHandler(res) {
    if (res.status != 200) {
      console.log('Error : ', JSON.parse(res._body).error);
      return Promise.reject(JSON.parse(res._body).error)
    }
  }
}
