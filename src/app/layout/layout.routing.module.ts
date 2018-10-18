import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomePostsComponent } from '../home-posts/home-posts.component';
// import { AuthGuard } from '../guard/auth-guard';


const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        // { path: '', redirectTo: '/homePage' },
        { path: 'homePosts', component: HomePostsComponent},
      ]
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);