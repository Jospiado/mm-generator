import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Adicione FormsModule aqui
    CommonModule,
    RouterModule.forRoot(routes),  // Certifique-se de usar 'forRoot' aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
