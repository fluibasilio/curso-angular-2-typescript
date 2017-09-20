import { Dao } from './dao';
import { Animal } from './../07-classes/animal';
import { Cavalo } from './../07-classes/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Papagaio');
let cavalo: Cavalo = new Cavalo('Pangaré');

dao.insert(animal);
dao.insert(cavalo);