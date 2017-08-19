import { Injectable } from '@angular/core';
//import { Evento } from './Evento';
import { Teste } from './Teste';
//import { Cidade } from './Cidade';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class EventosService {
    //eventos any;
    constructor(private http: Http) {
         
    }

    all(): Observable<Teste[]> {
        return this.http.get('http://localhost:3000/conferencias')
            .map(response => response.json() as Teste[]);
    }

    /*find(id: number): Observable<Evento> {
        return this.all()
            .map(eventos => eventos.find(evento => evento.id === id));
    }*/

    find(id: number): Observable<Teste> {
        return this.all()
            .map(eventos => eventos.find(evento => evento.id === id));
    }



    allEvents(): Observable<Teste[]>  {      
        return this.http.get('http://localhost:3000/conferencias')
            .map(response => response.json() as Teste[]);
    }

    paginateEvents(pagina: number, limite :number): Observable<Teste[]>  {
        /*if(pagina && limite > 0)
        {
            return this.http.get('http://localhost:3000/conferencias?_page=1&_limit=4')
            .map(response => response.json() as Evento[]);
        } 
        else{*/
            return this.http.get('http://localhost:3000/conferencias?_page='+pagina+'&_limit='+limite)
            .map(response => response.json() as Teste[]);
        //}        
    }

    allCity(): Observable<Teste[]>  {
        return this.http.get('http://localhost:3000/cidades')
            .map(response => response.json() as Teste[]);
    }

    allLaravel(): Observable<Teste[]>  {
        return this.http.get('http://localhost:8000/teste')
            .map(response => response.json() as Teste[]);
    }
}
