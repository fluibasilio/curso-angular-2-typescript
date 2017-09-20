import { DaoInterface } from './dao.interface';
import { AnimalDao } from './animal.dao';
import { Animal } from './../07-classes/animal';

let dao: AnimalDao = new AnimalDao();
let animal: Animal = new Animal('Gato');

dao.insert(animal);