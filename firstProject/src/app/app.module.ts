import {NgModule } from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from'@angular/platform-browser'

@NgModule({
    declarations : [AppComponent] , // set of component reltae to this module(array)
    imports: [BrowserModule],
    bootstrap :[AppComponent], // set of components of are bootsraped when this module is boostrabed 
})
export class AppModule {}