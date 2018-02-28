import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  progressRef: NgProgressRef;
  constructor(public progress: NgProgress){

  }
   APP_URL = "http://localhost:8585";
   ngOnInit() {
    this.progressRef = this.progress.ref();
    
    // Start the progress
    this.progressRef.start();
  }
  ngOnDestroy() {
    this.progress.destroy();
  }
}
