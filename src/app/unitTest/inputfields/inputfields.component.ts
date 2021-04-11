import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.scss']
})
export class InputfieldsComponent implements OnInit {
  forms : FormGroup;
  constructor() {
    this.forms = new FormGroup({
      inputControlName : new FormControl(''),
      emailController : new FormControl(''),
      textareaController: new FormControl(''),
      checkboxController: new FormControl(''),
      primaryButtonController: new FormControl(''),
      secondaryButtonController: new FormControl(''),

     })
  }
  
  placeholder : any;
  emailPlaceholder : any;
  textareaPlaceholder: any;
  ngOnInit(): void {
   this.placeholder = 'Enter Name';
   this.emailPlaceholder = 'Enter Email Id.'
   this.textareaPlaceholder = 'Textarea text.'
   
  }
  fieldVal : any;
   
  onSubmit(){
    this.fieldVal = JSON.stringify(this.forms.value);
  }
}
