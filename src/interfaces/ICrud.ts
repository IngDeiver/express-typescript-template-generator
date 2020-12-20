/* eslint-disable no-unused-vars */
/**
 *
 * The interface for managament generics crud
 * @interface Crud
 * @template T - The type of resource
 * @template U - The type of ID the resource
 */
interface Crud<T, U> {
     /**
      *
      * Create a new resource
      * @param {T} object - Object to create
      * @return {T} - Return a resource
      * @memberof Crud
      */
     create(object: T): T;
     /**
      *
      * List all resources of type T
      * @return {Array<T>} - Return an Array<T> resources
      * @memberof Crud
      */
     list(): Array<T>;
     /**
      *
      * Get a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource
      * @memberof Crud
      */
     getById(id: U): T;
     /**
      *
      * Remove a resource
      * @param {T} object - Object to remove
      * @return {T} - Return a resource removed
      * @memberof Crud
      */
     remove(object: T): T;
     /**
      *
      *  Remove a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource
      * @memberof Crud
      */
     remove(id: U): T;
     /**
      *
      * Update a resource
      * @param {T} object - Object to update
      * @return {T} - Return a resource updated
      * @memberof Crud
      */
     update(object: T): T;
     /**
      *
      * Update a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource updated
      * @memberof Crud
      */
     update(id: U): T;
}

export default Crud;
