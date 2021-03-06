import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }
    `]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {
    
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>(); // x xChange >> [x]="" (xChange)="" | [(x)]

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) {}

    ngOnInit(): void{
        this.contatos = this.termosDaBusca
            .debounceTime(700) // aguarde 500ms para emitir novos eventos
            .distinctUntilChanged() // ignore se o proximo termo de busca for igual ao anterior
            .switchMap( term => {
                // console.log("buscou: ", term);
                return term ? this.contatoService.searchContato(term) : Observable.of<Contato[]>([]);
            }).catch(err => {
                // console.log(err);
                return Observable.of<Contato[]>([]);
            });
        
        // "| async" em contato-busca.component.html faz o subscribe do evento
        // this.contatos
        //     .subscribe((contatos: Contato[]) => {
        //     console.log("retornou do serviço: ");
        //     console.dir(contatos);
        // });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        // console.log(changes);
        this.search(busca.currentValue);
    }

    search(termo: string): void {
        // console.log('metodo search > ', termo)
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato: Contato): void {
        let link = ['contato/save/', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');

    }

}