import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styles: [`
        /*
        .ng-valid[required]{
            border: 1px solid lime;
        }
        */  
    `],
    styleUrls: ['contato-detalhe.component.css']
})

export class ContatoDetalheComponent implements OnInit {
    
    contato: Contato;
    private isNew: boolean = true

    constructor (
        private ContatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        this.contato = new Contato(0, '', '', '');
        
        // console.log("on init inicializado");

        this.route.params.forEach(( params: Params ) => {
            
            let id: number = +params['id'];
            
            // console.log("ID: ", id);

            if (id){
                
                this.isNew = false;
                
                this.ContatoService.getContato(id)
                .then((contato: Contato) => {
                    
                    this.contato = contato;
                    // console.log("Contato > ", contato);
                
                });

            }

        }); 
        
    };

    getFormGroupClass(isValid: boolean, isPristine: boolean ): {}{
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean ): {}{
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit():void{

        // console.log('submit', this.contato);
        // console.log('novo: ', this.isNew );
        
        if (this.isNew) {
            console.log('cadastrar novo contato');
        }else{
            console.log('alterar contato existente')
        }
        
    }

    // teste(): void{
    //     console.log('this.contato', this.contato);
    // }

}