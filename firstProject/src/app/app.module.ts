import {NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component'
import {BrowserModule} from'@angular/platform-browser'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [AppComponent] , // set of component reltae to this module(array)
    imports: [BrowserModule , CommonModule , FormsModule],
    bootstrap :[AppComponent], // set of components of are bootsraped when this module is boostrabed 
   
})
export class AppModule {}