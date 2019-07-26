import {Component, Input, OnInit} from '@angular/core';
import { Comment } from './comment';
import {CommentsService} from "../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments : Comment[] = [];
  public commentText: string;
  @Input() videoId: string;
  @Input() userId: string;

  constructor(private commentsService: CommentsService) { }

  //page load(my component)
  //display
  ngOnInit() {
    console.log("VideoId === " + this.videoId); //debugging
    console.log("UserId === " + this.userId);  //debugging
    // to call API
    this.commentsService.getComments(this.videoId).subscribe(videoComments => {
      console.log(videoComments);
       this.comments = videoComments.comments;
       console.log(this.comments);
     });
    console.log(this.comments[0]);
  }


  addComment() {
    let comment: Comment = new Comment();
    comment.text = this.commentText;
    comment.userId = this.userId;
    this.commentsService.addComment(this.videoId, comment);
    this.commentsService.getComments(this.videoId).subscribe(videoComments => {
      this.comments = videoComments.comments;
    });
  }

}
