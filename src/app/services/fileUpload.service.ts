import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const FILE_UPLOAD_URL = environment.apiUrl + 'api/public/fileupload';

@Injectable({
    providedIn: 'root',
})
export class FileUploadService {


    constructor(private http: HttpClient) {

    }

    upload(file): Observable<any> {

        const formData = new FormData();

        formData.append('file', file, file.name);

        return this.http.post(FILE_UPLOAD_URL, formData, {responseType: 'text'});
    }

}
