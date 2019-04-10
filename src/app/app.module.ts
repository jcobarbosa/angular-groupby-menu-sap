import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [BrowserModule, FormsModule, NgPipesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
