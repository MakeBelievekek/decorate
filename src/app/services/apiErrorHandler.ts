import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiErrorHandler {


  constructor() {
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

}
