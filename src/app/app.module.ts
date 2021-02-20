// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing
import { appRoutingModule } from "./app.routing";
// componentes 
import { AppComponent } from './app.component';
// módulos
import { PortalAlunoModule } from './portal-aluno/portal-aluno.module'
import { HttpClientModule } from "@angular/common/http";

// services


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    PortalAlunoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
