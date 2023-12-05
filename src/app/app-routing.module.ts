import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page-home/page-home.module').then(m => m.PageHomeModule),
    pathMatch: 'full'
  }, 
  {
    path: 'general',
    loadChildren: () => import('./pages/page-general/page-general.module').then(m => m.PageGeneralModule),
  },
  { 
    path: 'tech',
    loadChildren: () => import('./pages/page-technology/page-technology.module').then(m => m.PageTechnologyModule)
  }
,
  { 
    path: 'books',
    loadChildren: () => import('./pages/page-books/page-books.module').then(m => m.PageBooksModule)
  },
  { 
    path: 'tutorials',
    loadChildren: () => import('./pages/page-tutorials/page-tutorials.module').then(m => m.PageTutorialsModule)
  },

  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
