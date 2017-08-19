import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Teste } from './Teste';
import { EventosService } from './eventos.service';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: 'teste.component.html'
})

export class TesteComponent implements OnInit {
    teste: Teste[];

    constructor(
        private eventosService: EventosService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.eventosService.allLaravel().
            subscribe(testes => { this.teste = testes; console.log(testes);
        });
    }
}