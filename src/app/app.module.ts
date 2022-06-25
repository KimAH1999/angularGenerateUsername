import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppservService } from './appserv.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AppservService],  //Injecting dependencies which is servername created from commandterminal($ng g server appserv)
  bootstrap: [AppComponent]

})
export class AppModule { }
