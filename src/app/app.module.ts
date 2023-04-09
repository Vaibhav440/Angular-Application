import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstDemoComponent } from './first-demo/first-demo.component';
import { SecondDemoComponent } from './second-demo/second-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDemoComponent,
    SecondDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
