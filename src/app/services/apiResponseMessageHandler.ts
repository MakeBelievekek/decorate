import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class ApiResponseMessageHandler {

    constructor(private toastr: ToastrService) {
    }

    public handleResponse(message: HttpResponse<any>) {
        this.toastr.success(message.body);
    }

    public handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `Error: ${err.error.message}`;
        } else {
            switch (err.status) {
                case 400 :
                    errorMessage = err.status + ': Bad Request';
                    break;
                case 401 :
                    errorMessage = err.status + ': You are unauthorized to do this action';
                    break;
                case 403 :
                    errorMessage = err.status + ': You dont have permission to access the requested resource';
                    break;
                case 404 :
                    errorMessage = err.status + ': The requested resource does not exist';
                    break;
                case 412 :
                    errorMessage = err.status + ': Precondition Failed';
                    break;
                case 417 :
                    errorMessage = err.status + ': A szerver nem képes teljesíteni a kérést';
                    break;
                case 500 :
                    errorMessage = err.status + ': Internal Server Error';
                    break;
                case 503 :
                    errorMessage = err.status + ': The requested service is not available';
                    break;
                default:
                    errorMessage = 'Something went wrong';
            }
        }

        this.toastr.error(errorMessage);
    }

}
