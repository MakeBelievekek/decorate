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
    upload(file):Observable<any> {

        // Create form data
        const formData = new FormData();

        // Store form name as "file" with file data
        formData.append("file", file, file.name);

        // Make http post request over api
        // with formData as req
        return this.http.post(FILE_UPLOAD_URL, formData)
    }

}
