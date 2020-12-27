import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AttributeModel} from '../../../models/attributeModel';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {

  categoryForm: FormGroup;
  attribute = new AttributeModel();
  attributeTypes: string[] = ['', 'Color', 'Pattern', 'Style', 'Composition'];
  attributesFromExcel: AttributeModel[] = [];
  fileInputLabel: string;

  constructor(private adminService: AdminService, private toastr: ToastrService) {
    this.categoryForm = new FormGroup({
      'attributeName': new FormControl(''),
      'attributeType': new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  saveCategory() {
    const data = {...this.categoryForm.value};
    console.log(data);
    this.attribute.description = data.attributeName;
    this.attribute.type = data.attributeType;
    this.adminService.saveAttribute(this.attribute).subscribe(() => {
    });
  }

  /*   onFileChange(event) {
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
             for (var key in jsonData) {
                 if (jsonData.hasOwnProperty(key)) {
                     for (let attr of jsonData[key]) {
                         this.attribute = attr;
                         this.attributesFromExcel.push(this.attribute);
                     }
                 }
             }
             this.fileInputLabel = file.name;
         };
         reader.readAsBinaryString(file);
     }

     saveExcel() {
         if (this.attributesFromExcel) {
             this.adminService.saveAttributesFromExcel(this.attributesFromExcel)
                 .subscribe(() => {}
                     , (err) => {
                         this.toastr.error(err);
                     }
                     , () => {this.toastr.success("Sikeres mentés")});
         }
     }
     */
}
