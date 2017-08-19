import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EventosService } from '../eventos/eventos.service';
import { Teste } from '../eventos/Teste';

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
     eventos: Teste[];

    constructor(private eventosService: EventosService,
        private router: Router) { }

    ngOnInit() {
        this.eventosService.all().
            subscribe(eventos => this.eventos = eventos);
    }

    qtdEventos(eventos: Teste){
        return this.eventos.length;
    }
}