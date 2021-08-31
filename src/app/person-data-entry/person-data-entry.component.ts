import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { person } from '../models/person';

@Component({
  selector: 'app-person-data-entry',
  templateUrl: './person-data-entry.component.html',
  styleUrls: ['./person-data-entry.component.css']
})


export class PersonDataEntryComponent implements OnInit {
// Name : FormControl;
// Age : FormControl;
personForm : FormGroup;
arName : string[][];
perLst : any[];
//workHistory: FormGroup;
//workHistoryArray:Array<FormGroup> = [];

  constructor(private readonly fb : FormBuilder) { 
    // this.Name= new FormControl('',Validators.required);
    // this.Age= new FormControl('');
    // this.personForm = new FormGroup(
    //   {
    //     Name : new FormControl('',Validators.required),
    //     Age: new FormControl(''),
    //     Address : new FormGroup({
    //       Strret1 : new FormControl(''),
    //       City : new FormControl('')
    //     })
    //   }
    // );

    this.personForm =this.fb.group(
      {
        Name : ['',Validators.required],
        Age : [''],
        Address :this.fb.group(
          {
            Street1 : [''],
            City : ['']
          }
        ),
        WorkHistory : this.fb.array( [])
      }
    );

    //  this.workHistory = this.fb.group({
    //      CompanyName:[''],
    //      StartDate:[''],
    //      EndDate:[''],
    //      Description:[''],
    //    });
      
      
    this.arName =[];
    this.perLst =[];
   
  }

  ngOnInit(): void {
  }

    
  get Name(){
    return this.personForm.get('Name');
  }
  get Age(){
    return this.personForm.get('Age');
  }
  get WorkHistoryArray() : FormArray{
    return this.personForm.get('WorkHistory') as FormArray;
  }

  AddWorkHistory() : void {
    
       this.WorkHistoryArray.push(this.fb.group({
         CompanyName:[''],
         StartDate:[''],
         EndDate:[''],
         Description:[''],
       }));
      // this.personForm.patchValue({
      //   workHistory :this.workHistoryArray 
      // });
    console.log(this.personForm.value);  
  }
  

  SaveWorkHistory (index : number){
    const currentWorkhistory = this.WorkHistoryArray.at(index);

  }
  // ShowData(){
  //   console.log(`Name is ${this.Name} and age is ${this.Age}`);
  // }
  // PushData(){
  //   //debugger
    
  //   this.perLst.push(new person(this.Name,this.Age));

  //   //this.perLst.push({Name:this.Name,Age: this.Age});

  //   //this.arName.push([this.Name,this.Age]);
  //   this.Name='';
  //   this.Age='';
  //   console.log(this.perLst); 

  // }
}
