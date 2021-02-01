import {NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component'
import {BrowserModule} from'@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ListmploeesComponent } from './employees/listmploees/listmploees.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HooksComponent } from './hooks/hooks.component';
import { CouterComponent } from './couter/couter.component';
import { EmployDisplayComponent } from './employ-display/employ-display.component';
import { ViewChildDecComponent } from './view-child-dec/view-child-dec.component';
import { ViewChildDecParentComponent } from './view-child-dec-parent/view-child-dec-parent.component';
import { SubchildComponent } from './subchild/subchild.component';

@NgModule({
    declarations : [AppComponent, IntroComponent, ListmploeesComponent, ParentComponent, ChildComponent, HooksComponent, CouterComponent, EmployDisplayComponent, ViewChildDecComponent, ViewChildDecParentComponent, SubchildComponent] , // set of component reltae to this module(array)
    imports: [BrowserModule , CommonModule , FormsModule],
    bootstrap :[AppComponent], // set of components of are bootsraped when this module is boostrabed 
   
})
export class AppModule {}