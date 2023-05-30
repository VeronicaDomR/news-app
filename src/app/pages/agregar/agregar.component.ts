import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { INews } from 'src/app/models/INews';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  newsFormGroup = this.formBuilder.group(
    {
      description: ['Dummy Description'],
      title: ['Dummy title'],
      publishedDate: [new Date().toISOString()]
    }
  );

  constructor(
    public noticiasService: NoticiasService,
    private formBuilder: FormBuilder
  ) {}

  dateChange(event:any){
    console.log(event)
  }

  addNews() {
    const item: INews = {
      description: this.newsFormGroup.value.description??'',
      title: this.newsFormGroup.value.title??'',
      date: new Date(this.newsFormGroup.value.publishedDate!)
    }
    this.noticiasService.addNews(item)

  }
}

