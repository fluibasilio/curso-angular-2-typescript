"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const contatos_mock_1 = require("./contatos.mock");
let ContatoService = class ContatoService {
    getContatos() {
        return Promise.resolve(contatos_mock_1.CONTATOS);
    }
    getContato(id) {
        return this.getContatos()
            .then((contatos) => contatos.find(contato => contato.id === id));
    }
    getContatosSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        }).then(() => {
            console.log('primeiro then > teste 1');
            return "curso angular 2";
        }).then((param) => {
            console.log("segundo then > teste 2");
            console.log("param recebido no primeiro then > ", param);
            // let list: number[] = [1, 2, 3];
            let p2 = "complemento: " + param;
            let list = [1, 2, 3];
            return [p2, list];
        }).then((param2) => {
            console.log("terceiro then > teste 3 agora vai");
            console.log("param2 recebido no segundo then > ", param2);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log("continuando aplicacao");
                    resolve2(1);
                }, 10000);
            });
        }).then((p) => {
            console.log("agora vai");
            console.log("p > ", p);
            return this.getContatos();
        });
        // jeito diferente de implementar que funciona (sem o return)
        // }).then(() => this.getContatos() );
    }
};
ContatoService = __decorate([
    core_1.Injectable()
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map