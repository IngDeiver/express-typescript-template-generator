import { Router } from 'express';
/**
 *
 * Define the atributes of routes
 * @category Interfaces
 * @interface IRoute
 */
interface IRoute {
    router: Router,
    pathIdParam?: string
}

export default IRoute;
