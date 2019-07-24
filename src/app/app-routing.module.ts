import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoListComponent} from './video-list/video-list.component';
import {UserComponent} from './user/user.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {UploadComponent} from "./upload/upload.component";
import {VideoPlayerComponent} from "./video-player/video-player.component";
import {UserLoginComponent} from "./user-login/user-login.component";


const routes: Routes = [
  { path: 'videos', component: VideoListComponent },
  { path: 'login', component: UserLoginComponent},
  { path: 'signup', component: UserComponent},
  { path: 'addvideo', component: UploadComponent},
  { path: 'videos/videoplayer/:videoId', component: VideoPlayerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AngularFileUploaderModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }


