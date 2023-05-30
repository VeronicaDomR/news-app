import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INews } from 'src/app/models/INews';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
 @Input()
 newsItem! :INews;
 @Output()
 remove:EventEmitter<INews> =new EventEmitter()
 removeHandler(){
    this.remove.emit(this.newsItem);
 }
}
