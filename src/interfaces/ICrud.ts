/* eslint-disable no-unused-vars */
/**
 *
 * The interface for managament generics ICrud
 * @interface ICrud
 * @template T - The type of resource
 * @template U - The type of ID the resource
 */
interface ICrud<T, U> {
     /**
      *
      * Create a new resource
      * @param {T} object - Object to create
      * @return {T} - Return a resource
      * @memberof ICrud
      */
     create(object: T): T;
     /**
      *
      * List all resources of type T
      * @return {Array<T>} - Return an Array<T> resources
      * @memberof ICrud
      */
     list(): Array<T>;
     /**
      *
      * Get a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource
      * @memberof ICrud
      */
     getById(id: U): T;
     /**
      *
      * Remove a resource
      * @param {T} object - Object to remove
      * @return {T} - Return a resource removed
      * @memberof ICrud
      */
     remove(object: T): T;
     /**
      *
      *  Remove a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource
      * @memberof ICrud
      */
     removeById(id: U): T;
     /**
      *
      * Update a resource
      * @param {T} object - Object to update
      * @return {T} - Return a resource updated
      * @memberof ICrud
      */
     update(object: T): T;
     /**
      *
      * Update a resource by id
      * @param {U} id - id of resource to find
      * @return {T} - Return a resource updated
      * @memberof ICrud
      */
     updateById(id: U): T;
}

export default ICrud;
