import { Comment } from "./linkedInComment";

export class Post {  
    public Id: number | undefined;
    public Text : string="";
    public Likes : number=0;
    public Comments : string="";
    public  PostComments: Comment | undefined;
    //public PostDateTime : Date

    // constructor(id: number,text : string,like: number,comment:string ,postDate : Date){
    //     this.Id = id;
    //     this.Text = text;
    //     this.Likes = like;
    //     this.Comments = comment;
    //     this.PostDateTime=postDate;
    // }
} 