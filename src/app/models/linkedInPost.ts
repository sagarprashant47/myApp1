export class Post {  
    public Id: number;
    public Text : string;
    public Likes : number;
    public Comments : string;
    public PostDateTime : Date

    constructor(id: number,text : string,like: number,comment:string ,postDate : Date){
        this.Id = id;
        this.Text = text;
        this.Likes = like;
        this.Comments = comment;
        this.PostDateTime=postDate;
    }
} 