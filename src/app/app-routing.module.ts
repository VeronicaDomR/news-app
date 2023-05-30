import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class noticias { }

const routes: Routes = [

  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'news',
      },
      {
        path: 'news',
        loadChildren: () => import('./pages/noticias/noticias.module').then((m) => m.NoticiasModule),
      },
      {
        path: 'add',
        loadChildren: () => import('./pages/agregar/agregar.module').then((m) => m.AgregarModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
