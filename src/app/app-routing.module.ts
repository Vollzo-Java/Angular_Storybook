import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InputfieldsComponent } from './unitTest/inputfields/inputfields.component';
import { PocComponent } from './poc/poc.component';


const routes: Routes = [{path: 'input', component: InputfieldsComponent}, 
                        {path: 'index', component: PocComponent}];


@NgModule({   
  imports: [BrowserModule,
            RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy'})
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
