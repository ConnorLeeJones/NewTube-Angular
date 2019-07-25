import { Injectable } from '@angular/core';
import {Comment, VideoComments} from "../comments/comment";
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: Comment[];
  url = environment.baseUrl + '/videos/';


  constructor(private http: HttpClient) { }

  public getComments(videoId) : Observable<VideoComments> {
    console.log(this.http.get<VideoComments>(this.url + videoId + '/comments'));
    return this.http.get<VideoComments>(this.url + videoId + '/comments').pipe(
      catchError(this.handleError<VideoComments>('getComments', null))
    );
  }




  public addComment(videoId, userComment) {
    console.log("Video ID " + videoId);
    console.log(userComment);
    this.http.post(this.url + videoId + "/comments", userComment).subscribe();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

