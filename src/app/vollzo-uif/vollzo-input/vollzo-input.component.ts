import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';
 

@Component({
  selector: 'vollzo-input',
  template: '<input type = "text"'
           + ' name = "{{name}}"'
           + ' placeholder = "{{placeholder}}"'
           + ' value="{{value}}"'         
           + ' formControlName="inputControlName">',
  styleUrls: ['./vollzo-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
 
export class VollzoInputComponent{

  @Input() placeholder: string = '';
  @Input() name: string = ''; 
  @Input() value : any; 
//  @Input() control : any;
  constructor() {     

  }

}

@Component({
  selector: 'vollzo-email-input',
  template: '<input type = "email"'
           + ' name = "{{name}}"'           
           + ' value="{{value}}"'   
           + ' placeholder = "{{emailPlaceholder}}"'        
           + ' formControlName="inputControlName">',
  styleUrls: ['./vollzo-input.component.scss']
})
 
export class VollzoInputEmailComponent{

  //@Input() placeholder: string = '';
  @Input() name: string = '';  
  @Input() value : any;
  @Input() emailPlaceholder : string = '';  
  constructor() {     

  }

}