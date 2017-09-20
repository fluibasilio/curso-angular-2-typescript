"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var animal_1 = require("./../07-classes/animal");
var cavalo_1 = require("./../07-classes/cavalo");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Papagaio');
var cavalo = new cavalo_1.Cavalo('Pangaré');
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map