import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { LayoutMobileHeaderComponent } from './layout/layout-mobile-header/layout-mobile-header.component';
import { FooterComponent } from './layout/footer.component';
import { LayoutMobileFooterComponent } from './layout/layout-mobile-footer/layout-mobile-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinkComponent } from './layout/link/link.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    LayoutMobileHeaderComponent,
    FooterComponent,
    LayoutMobileFooterComponent,
    PageNotFoundComponent,
    LinkComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    LayoutMobileHeaderComponent,
    FooterComponent,
    LayoutMobileFooterComponent,
    LinkComponent
  ]
})
export class SharedModule {}
