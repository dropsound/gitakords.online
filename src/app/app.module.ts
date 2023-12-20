import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

import { PostCardComponent } from './layouts/post-card/post-card.component';

import { SongComponent } from './layouts/song/song.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    SongComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
