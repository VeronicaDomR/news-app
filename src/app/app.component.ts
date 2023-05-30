import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: '<ion-router-outlet></ion-router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-app';
}
