import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPublicInfoComponent } from './my-public-info/my-public-info.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

export const routes: Routes = [
  {
      path: '',
      component: ProjectsContainerComponent,
      children: [
          { path: 'my-public-info', component: MyPublicInfoComponent },
      ]
  }
];

@NgModule({
  declarations: [
    MyPublicInfoComponent,
    ProjectsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
