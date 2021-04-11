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
           + ' formControlName="emailController">',
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

//textarea

@Component({
  selector: 'vollzo-text-area',
  template: '<textarea'
           + ' name = "{{name}}"'           
           + ' value="{{value}}"' 
           + ' class="text-area"'   
           + ' placeholder = "{{textareaPlaceholder}}"'        
           + ' formControlName="textareaController">'
           + ' </textarea>',
  styleUrls: ['./vollzo-input.component.scss']
})
 
export class VollzoTextareaComponent{

  //@Input() placeholder: string = '';
  @Input() name: string = '';  
  @Input() value : any;
  @Input() textareaPlaceholder : string = '';  
  constructor() {     

  }

}

//checkbox

@Component({
  selector: 'vollzo-checkbox',
  template: '<input type = "checkbox"'
           + ' name = "{{name}}"'           
           + ' value="{{value}}"'   
           + ' formControlName="checkboxController">',
  styleUrls: ['./vollzo-input.component.scss']
})
 
export class VollzoCheckboxComponent{

  //@Input() placeholder: string = '';
  @Input() name: string = '';  
  @Input() value : any;
  constructor() {     

  }

}

//primary button

@Component({
  selector: 'vollzo-primary-button',
  template: '<button'
           + ' name = "{{name}}"'           
           + ' class="button primary-button"'  
           + ' formControlName="primaryButtonController">'
           + ' Primary Button'
           + ' <button>',
  styleUrls: ['./vollzo-input.component.scss']
})
 
export class VollzoPrimaryButtonComponent{

  //@Input() placeholder: string = '';
  @Input() name: string = '';  
  @Input() value : any;
  constructor() {     

  }

}

//secondary button

@Component({
  selector: 'vollzo-secondary-button',
  template: '<button'
           + ' name = "{{name}}"'           
           + ' class="button secondary-button"'  
           + ' formControlName="secondaryButtonController">'
           + ' Secondary Button'
           + ' <button>',
  styleUrls: ['./vollzo-input.component.scss']
})
 
export class VollzoSecondaryButtonComponent{

  //@Input() placeholder: string = '';
  @Input() name: string = '';  
  @Input() value : any;
  constructor() {     

  }

}