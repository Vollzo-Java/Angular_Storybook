import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VollzoInputComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { VollzoInputEmailComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { InputfieldsComponent } from './unitTest/inputfields/inputfields.component';
import { VollzoTextareaComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { VollzoCheckboxComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { VollzoPrimaryButtonComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { VollzoSecondaryButtonComponent } from './vollzo-uif/vollzo-input/vollzo-input.component';
import { PocComponent } from './poc/poc.component';






@NgModule({
  declarations: [
    AppComponent,
    VollzoInputComponent,
    VollzoInputEmailComponent,
    InputfieldsComponent,
    VollzoTextareaComponent,
    VollzoCheckboxComponent,
    VollzoPrimaryButtonComponent,
    VollzoSecondaryButtonComponent,
    PocComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AppModule { }
