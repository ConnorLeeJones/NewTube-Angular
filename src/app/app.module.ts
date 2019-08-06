import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import {FormsModule} from "@angular/forms";
import { VideoListComponent } from './video-list/video-list.component';
import {VideoService} from "./services/videoservice.service";
import { UserComponent } from './user/user.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    VideoListComponent,
    UserComponent,
    UploadComponent,
    VideoPlayerComponent,
    UserLoginComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
