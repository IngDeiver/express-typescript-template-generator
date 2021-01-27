/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { IsString, IsNotEmpty } from 'class-validator';

/**
 *
 * DTO for resource example
 * @category DTOs
 * @class ExampleDTO
 * @param {string}propery - A property example
 */
class ExampleDTO {
    @IsNotEmpty()
    @IsString()
    public property: string;

    /**
   * Creates an instance of ExampleDTO.
   * @param {string} property - the tile of resource
   * @memberof ExampleDTO
   */
    constructor(property: string) {
      this.property = property;
    }
}

export default ExampleDTO;
