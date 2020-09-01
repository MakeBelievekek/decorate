import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {AttributeModel} from "../../../models/attributeModel";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {

  categoryForm: FormGroup;
  attribute: AttributeModel = new class implements AttributeModel {
    description: string;
    type: string;
  };
  attributeTypes: string[] = ['', 'Color', 'Pattern', 'Style', 'Composition'];

  constructor(private adminService: AdminService, private http: HttpClient) {
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
    })
  }


}
