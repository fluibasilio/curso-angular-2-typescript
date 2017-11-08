"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const contato_model_1 = require("./contato.model");
const contato_service_1 = require("./contato.service");
let ContatoDetalheComponent = class ContatoDetalheComponent {
    constructor(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        this.contato = new contato_model_1.Contato('', '', '');
        // console.log("on init inicializado");
        this.route.params.forEach((params) => {
            let id = +params['id'];
            // console.log("ID: ", id);
            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato) => {
                    this.contato = contato;
                    // console.log("Contato > ", contato);
                });
            }
        });
    }
    ;
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
    onSubmit() {
        // console.log('submit', this.contato);
        // console.log('novo: ', this.isNew );
        let promise;
        if (this.isNew) {
            console.log('cadastrar novo contato');
            promise = this.contatoService.create(this.contato);
        }
        else {
            console.log('alterar contato existente');
            promise = this.contatoService.update(this.contato);
        }
        promise.then(contato => this.location.back());
    }
};
ContatoDetalheComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContatoDetalheComponent);
exports.ContatoDetalheComponent = ContatoDetalheComponent;
//# sourceMappingURL=contato-detalhe.component.js.map