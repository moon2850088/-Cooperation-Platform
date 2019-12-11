import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;
  lightTheme = true;
  switchTheme(activate){
    if (this.darkTheme == false){
    this.darkTheme = activate;
    this.lightTheme = false;
    }else {
      this.lightTheme = activate;
      this.darkTheme = false;
    }
  }
}
