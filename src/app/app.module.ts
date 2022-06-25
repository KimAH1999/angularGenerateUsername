import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularGenerateUsernameComponent } from './angular-generate-username/angular-generate-username.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularGenerateUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], 
  bootstrap: [AppComponent]

})
export class AppModule { }
