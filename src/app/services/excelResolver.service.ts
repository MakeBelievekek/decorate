import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
    providedIn: 'root',
})
export class ExcelResolver {

    fileInputLabel: string;

    constructor() {}

    onFileChange(event): any {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onload = (event) => {
            const data = reader.result;
            workBook = XLSX.read(data, {type: 'binary'});
            jsonData = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = XLSX.utils.sheet_to_json(sheet);
                return initial;
            }, {});
            this.fileInputLabel = file.name;
        };
        reader.readAsBinaryString(file);
        return jsonData;
    }
}
