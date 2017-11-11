import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model'; 

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        let contatos: Contato[] = [
            {id: 1,     nome: 'Fernando da Silvas',     email: 'fernando@fernando.com',     telefone: '(11) 98989-8989' },
            {id: 2,     nome: 'Luigi da Souza',         email: 'luigi@luigi.com',           telefone: '(11) 98877-4343' },
            {id: 3,     nome: 'Basilio da Silva',       email: 'basilio@basilio.com',       telefone: '(11) 98876-6655' },
            {id: 4,     nome: 'Juliana da Souza',       email: 'juliana@juliana.com',       telefone: '(11) 92234-9979' },
            {id: 5,     nome: 'Pereira da Silva',       email: 'pereira@pereira.com',       telefone: '(11) 94567-3231' },
            {id: 6,     nome: 'Teste da Basilio',       email: 'fernando@fernando.com',     telefone: '(11) 98989-8989' },
            {id: 7,     nome: 'Agora da Silva',         email: 'luigi@luigi.com',           telefone: '(11) 98877-4343' },
            {id: 8,     nome: 'Gohorse da Pereira',     email: 'basilio@basilio.com',       telefone: '(11) 98876-6655' },
            {id: 9,     nome: 'Terra da Silva',         email: 'juliana@juliana.com',       telefone: '(11) 92234-9979' },
            {id: 10,    nome: 'Carro da Terra',         email: 'pereira@pereira.com',       telefone: '(11) 94567-3231' }
        ]

        let carros: any[] = [
            {id: 1, descricao: 'Fusca' },
            {id: 2, descricao: 'Brasilia' }
        ];

        return {
            'contatos': contatos,
            'carros': carros
        };
        
    }

}