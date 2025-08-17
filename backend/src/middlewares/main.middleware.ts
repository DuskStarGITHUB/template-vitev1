/**
 * =====================================================
 *  NAME    : main.middleware.ts
 *  DESCRIPTION: validation process entry for backend
 * =====================================================
 */

// DEPENDENCIES
import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { isMethodAllowed } from '../utils/mainl.util';


// MIDDLEWARE
@Injectable()
export class MethodMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!isMethodAllowed(req.method)) {
      throw new ForbiddenException(`Método ${req.method} no permitido`);
    }
    next(); // pasa al controlador
  }
}
