import { Component, OnInit } from '@angular/core';
import { listLocales } from 'ngx-bootstrap/chronos';
import { } from 'jquery';
import { LocalStorageService } from '../../auth/sercices/local-storage.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './admin-dashboard1.component.html',
  styleUrls: ['./admin-dashboard1.component.css']
})
export class AdminDashboard1Component implements OnInit {
  userLogado={};
  locale = 'en';
  locales = listLocales();
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  constructor(private localStorage: LocalStorageService,private _localeService: BsLocaleService) { }
  
  applyLocale(pop: any) {
    this._localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
  colorTheme = 'theme-green';
 
  bsConfig: Partial<BsDatepickerConfig>;
 
  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }
  ngOnInit() {
  this.userLogado = this.localStorage.getObject('user')

     // Update the AdminLTE layouts
    AdminLTE.init();
   
  }

}
