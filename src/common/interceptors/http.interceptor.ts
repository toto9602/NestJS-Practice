import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  InternalServerErrorException,
} from '@nestjs/common';
import { tap, map, catchError, Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((res) => console.log(res)),
      map((res) => res.response.name),
      catchError(() => {
        throw new InternalServerErrorException();
      }),
    );
  }
}
