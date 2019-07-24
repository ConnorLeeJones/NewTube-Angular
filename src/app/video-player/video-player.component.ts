import {Component, Input, OnInit} from '@angular/core';
import { Video} from "../classes/video";
import {VideoService} from "../services/videoservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})


export class VideoPlayerComponent implements OnInit {
  @Input() video: Video;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVideo();
    console.log(this.video);
  }

  getVideo() {
    const id = +this.route.snapshot.paramMap.get('videoId');
    this.videoService.getVideoById(id).subscribe(video => this.video = video);

  }

}
