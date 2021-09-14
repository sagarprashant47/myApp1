import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';



@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
hasView =false;
  constructor(private readonly templateRef : TemplateRef<any>,
    private readonly viewContainer : ViewContainerRef) {
      
     }

     @Input() set appUnless(condition : boolean){
       if(!condition && !this.hasView){
          this.viewContainer.createEmbeddedView(this.templateRef);
       }
       else if(condition && this.hasView){
        this.viewContainer.clear();
        this.hasView =false;
       }
     }

}
