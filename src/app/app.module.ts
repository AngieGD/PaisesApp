import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { AppRoutingModule } from './app-routing.module';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    PaisTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PaisModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
