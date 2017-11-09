import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})

export class ContatoBuscaComponent implements OnInit {
    
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) {}

    ngOnInit(): void{
        this.contatos = this.termosDaBusca
            .debounceTime(700) // aguarde 500ms para emitir novos eventos
            .distinctUntilChanged() // ignore se o proximo termo de busca for igual ao anterior
            .switchMap( term => {
                console.log("buscou: ", term);
                return term ? this.contatoService.searchContato(term) : Observable.of<Contato[]>([]);
            });
        
        this.contatos
            .subscribe((contatos: Contato[]) => {
            console.log("retornou do serviço: ");
            console.dir(contatos);
        });
    }

    search(termo: string): void {
        // console.log('metodo search > ', termo)
        this.termosDaBusca.next(termo);
    }

}