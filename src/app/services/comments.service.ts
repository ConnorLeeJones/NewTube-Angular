import { Injectable } from '@angular/core';
import {Comment, VideoComments} from "../comments/comment";
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: Comment[];

  constructor(private http: HttpClient) { }
  public getComments(videoId) : Observable<VideoComments> {
    return this.http.get<VideoComments>("http://localhost:8080/videos"+videoId+"/comments").pipe(
      catchError(this.handleError<VideoComments>('getComments', null))
    );
  }

  public addComment(videoId, userComment) {
    console.log("Video ID " + videoId);
    console.log(userComment);
    this.http.post("http://localhost:8080/videos"+videoId+"/comments", userComment).subscribe();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

