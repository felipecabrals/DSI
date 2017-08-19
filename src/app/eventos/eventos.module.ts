import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TesteComponent } from './teste.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { EventosService } from './eventos.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EventosRoutingModule
    ],
    declarations: [
        TesteComponent,
    ],
    providers: [
        EventosService
    ]
})
export class EventosModule { }
