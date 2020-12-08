import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const FILE_UPLOAD_URL = environment.apiUrl + 'api/public/fileupload';

@Injectable({
    providedIn: 'root',
})
export class FileUploadService {


    constructor(private https: HttpClient) {

    }

    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
        const data: FormData = new FormData();
        data.append('file', file);
        const newRequest = new HttpRequest('POST', FILE_UPLOAD_URL, data, {
            reportProgress: true,
            responseType: 'text',
        });
        return this.https.request(newRequest);
    }
}
