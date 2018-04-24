import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'Watch Finding Nemo','Myllan'),
    new Quote(2,'Buy Cookies','McMyllan')
  ]
  constructor(){
    
  }
}
