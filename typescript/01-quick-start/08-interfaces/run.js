"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal.dao");
var animal_1 = require("./../07-classes/animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('Gato');
dao.insert(animal);
//# sourceMappingURL=run.js.map