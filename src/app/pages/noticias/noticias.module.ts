import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias.component';

import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild([{ path: '', component: NoticiasComponent }])],
  declarations: [NoticiasComponent,NewsCardComponent],
  exports: [NoticiasComponent],
})
export class NoticiasModule {}