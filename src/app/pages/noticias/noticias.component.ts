import { Component, OnInit } from '@angular/core';
import { IonImg } from '@ionic/angular';
import { Observable, map } from 'rxjs';
import { INews } from 'src/app/models/INews';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {
  newsDataSource?: Observable<INews[]>;
  constructor(
    public noticiasService: NoticiasService
  ) {
  }

  ngOnInit(): void {
    this.newsDataSource = this.noticiasService.noticias$

      this.newsDataSource.subscribe(data=>console.log(data))
  }

  removeItem(item:INews){
    this.noticiasService.removeNews(item)
  }

}
