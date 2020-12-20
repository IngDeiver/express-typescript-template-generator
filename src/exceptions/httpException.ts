/**
 *
 *
 * Is a custom exception for implmented with the error handler
 * @class HttpException
 * @extends {Error}
 */
class HttpException extends Error {
  /**
   *
   *
   * @type {number} - The status of error
   * @memberof HttpException
   */
  public status: number

  /**
   *
   *
   * @type {string} - The messages of error
   * @memberof HttpException
   */
  public message: string

  /**
   * Creates an instance of HttpException.
   * @param {number} status - The status of error
   * @param {string} message - he message  of error
   * @memberof HttpException
   */
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
