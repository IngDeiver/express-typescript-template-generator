import { Router } from 'express';

interface IRoute {
    router: Router,
    pathIdParam?: string
}

export default IRoute;
