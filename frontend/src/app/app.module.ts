import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ToasterModule} from 'angular2-toaster';
import {NgLoadingBarModule} from 'ng-loading-bar';
import {MyDatePickerModule } from 'mydatepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';

// Services
import {HelperService} from './services/helper.service';
import {ConstantService} from './services/constant.service';
import {HTTPService} from './services/http.service';

// Layouts
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { BankListingComponent } from './bank-listing/bank-listing.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgLoadingBarModule.forRoot(),
    MyDatePickerModule,
    ToasterModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CheckoutComponent,
    SearchHeaderComponent,
    BankListingComponent,
    ApplicationFormComponent,
  ],
  providers: [
    HelperService,
    HTTPService,
    ConstantService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
