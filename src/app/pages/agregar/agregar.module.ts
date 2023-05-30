import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar.component';

import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from 'src/app/components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule, 
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AgregarComponent }])
  ],
  declarations: [AgregarComponent],
  exports: [AgregarComponent],
})
export class AgregarModule {}