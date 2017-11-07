import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";

@Injectable()
export class ContatoService {

    private contatosUrl: string = "app/contatos";
    
    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]> {
        // return Promise.resolve(CONTATOS);
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then( response => response.json().data as Contato[] )
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any>{
        console.log('ContatoService handleError:', err);
        return Promise.reject( err.message || err );
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find( contato => contato.id === id ));
    }

    getContatosSlowly(): Promise<Contato[]>  {
        return new Promise(( resolve, reject) => {

            setTimeout(resolve, 2000);

        }).then(() => { 
            
            console.log('primeiro then > teste 1');
            return "curso angular 2";

        }).then( (param: string) => {

            console.log("segundo then > teste 2");
            console.log("param recebido no primeiro then > ", param );
            // let list: number[] = [1, 2, 3];
            let p2: string = "complemento: " + param
            let list: Array<number> = [1, 2, 3];         
            
            return [p2, list];

        }).then( (param2: Array<string>) => { 
            
            console.log("terceiro then > teste 3 agora vai");
            console.log("param2 recebido no segundo then > ", param2 );

            return new Promise(( resolve2, reject2 ) =>  {
                setTimeout(() => {
                    console.log("continuando aplicacao");
                    resolve2(1);
                }, 10000);
            });

        }).then( (p:number) => { 
                    
            console.log("agora vai");
            console.log("p > ", p);
                                                
            return this.getContatos();

        });
        // jeito diferente de implementar que funciona (sem o return)
        // }).then(() => this.getContatos() );
    }
}