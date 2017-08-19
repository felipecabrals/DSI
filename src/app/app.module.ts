import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { EventosModule } from './eventos/eventos.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosModule,
        PublicModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }