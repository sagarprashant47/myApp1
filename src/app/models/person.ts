
export class person {
    public Name: string;
    public Age : string;
    public Email : string="";
    public WorkHistory : Array<WorkHistory>=[];
    public Skills : Array<Skill> = [];
    constructor(name:string,age:string){
        this.Name = name;
        this.Age = age;
    }

 
}

export class WorkHistory{
    public CompanyName : string ="";
    public StartDate: Date= new Date();
    public EndDate : Date | undefined = undefined;
    public Description : string="";
}

export class Skill {
  public SkillName : string="";

}
export class Address{
    public Street1 : string="";
    public Street2 : string="";
    public City : string="";
    public PinCode : number=0;
}