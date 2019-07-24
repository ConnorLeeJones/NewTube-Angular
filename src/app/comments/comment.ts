export class Comment {
  public userId : string;
  public createdDate : string;
  public text : string;
  constructor(){}
}

export class VideoComments {
  public videoId: string;
  public comments: Comment[];
  constructor(){}
}
