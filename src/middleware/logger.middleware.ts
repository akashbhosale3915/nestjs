import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const loggedIn = true;
    console.log('Request...');
    if (loggedIn) next();
    else throw new UnauthorizedException('You must be logged in');
  }
}
