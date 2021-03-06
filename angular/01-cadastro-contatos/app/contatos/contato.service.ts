import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';

import{ Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';

import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";
import { ServiceInterface } from "./../interfaces/service.interface";

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json' });
    
    constructor(
        private http: Http
    ){}

    findAll(): Promise<Contato[]> {
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

    find(id: number): Promise<Contato> {
        return this.findAll()
            .then((contatos: Contato[]) => contatos.find( contato => contato.id === id ));
    }

    create(contato: Contato): Promise<Contato> {
        return this.http
            .post( this.contatosUrl, JSON.stringify(contato), { headers: this.headers } )
            .toPromise()
            // forma simplificada removendo console.log
            // .then((response: Response) => response.json().data as Contato )
            .then((response: Response) => {
                console.log(response.json().data);
                return response.json().data as Contato;
            })
            .catch( this.handleError )
    }

    update(contato: Contato): Promise<Contato>{
        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/:id
        return this.http
            .put( url, JSON.stringify(contato), { headers: this.headers } )
            .toPromise()
            // forma simplificada removendo console.log
            // .then(() => contato as Contato )
            .then(() => {
                console.log(contato);
                return contato as Contato;
            })
            .catch( this.handleError )
    }

    delete(contato: Contato): Promise<Contato>{
        const url = `${this.contatosUrl}/${contato.id}`; // app/contatos/:id
        return this.http
            .delete( url, { headers: this.headers } )
            .toPromise()
            // forma simplificada removendo console.log
            // .then(() => contato as Contato )
            .then(() => {
                console.log(contato);
                return contato as Contato;
            })
            .catch( this.handleError )
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
                                                
            return this.findAll();

        });
        // jeito diferente de implementar que funciona (sem o return)
        // }).then(() => this.findAll() );
    }

    searchContato(term: string): Observable<Contato[]>{
        return this.http
            .get(`${this.contatosUrl}/?nome=${term}`)
            .map((res: Response) => res.json().data as Contato[] );
    }

}