import { DaoInterface } from './dao.interface';

export class Dao<T> implements DaoInterface<T> {

    tableName: string;

    insert (object: T): boolean {
        console.log('inserting classe DAO...');
        return true;
    }

    update (object: T): boolean {
        return true;
    }

    delete (id: number): T {
        return null;
    }

    find (id: number): T {
        return null;
    }
    
    findAll (): [T] {
        return [null];
    }

}