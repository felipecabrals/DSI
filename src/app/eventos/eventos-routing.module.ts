import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
    /*{
        path: 'eventos',
        component: EventosHomeComponent,
        children: [
            { path: ':id', component: EventoDetalhesComponent },
            { path: '', component: EventosListaComponent }
        ]
    }*//*,{
        path: 'recentes',
        component: EventosRecentesComponent
    },{
        path: 'inicial',
        component: EventosInicioComponent
    }*/

];

@NgModule({
    imports: [
        RouterModule.forChild(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class EventosRoutingModule { }
