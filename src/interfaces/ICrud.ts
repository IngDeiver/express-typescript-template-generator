/* eslint-disable no-unused-vars */
interface Crud<T, U> {
     create(object: T): T;
     list(): Array<T>;
     getById(id: U): T;
     remove(object: T): T;
     remove(id: U): T;
     update(object: T): T;
     update(id: U): T;
}

export default Crud;
