import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShowNews';
}
 
// https://newsapi.org/v2/everything?q=all&from=2023-01-06&sortBy=publishedAt&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4
// https://newsapi.org/v2/everything?q=all&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4
// https://newsapi.org/v2/everything?q=all&language=hi&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4
// https://newsapi.org/v2/everything?q=all&language=ko&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4
// https://newsapi.org/v2/everything?q=all&language=es&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4
// https://newsapi.org/v2/everything?q=all&language=fr&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4