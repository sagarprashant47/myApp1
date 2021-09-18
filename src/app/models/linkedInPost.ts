
import { Comment } from "./linkedInComment";
import { Like } from "./linkedInLike";

export class Post {  
    public Id: number | undefined;
    public Text : string="";
    public ImgBase64 :string | ArrayBuffer |null="";
    public Comments : string="";
    public  PostComments: Array<Comment> | undefined;
    public PostLikes : Array<Like> | undefined;
    
} 