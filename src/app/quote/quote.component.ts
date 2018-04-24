import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Watch Finding Nemo','Myllan',new Date(2018,3,2)
  ),
    new Quote(2,'Buy Cookies','McMyllan',new Date(2018,3,1) )
  ]
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`));

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  addNewQuote(quote){
    let quoteLength = this.quotess.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
