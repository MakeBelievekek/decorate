import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseMessageHandler } from './apiResponseMessageHandler';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private errorHandler: ApiResponseMessageHandler) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return new Observable<HttpEvent<any>>((observer) => {
                next.handle(req).subscribe(
                    (res: HttpResponse<any>) => {
                        if (res instanceof HttpResponse) {
                            observer.next(res);
                        }
                    }, (err: HttpErrorResponse) => {
                        this.errorHandler.handleError(err);
                    },
                );
            },
        );
    }
}
