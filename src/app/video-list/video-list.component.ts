import { Component, OnInit } from '@angular/core';
import { Video } from '../classes/video';
import { VideoService } from '../services/videoservice.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.findAll().subscribe(data => {
      this.videos = data;
    });
  }

}
