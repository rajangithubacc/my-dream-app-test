import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, provideRoutes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomePostsComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot([]),
    HttpModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
