import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AttributeModel } from '../../../models/attributeModel';
import { AdminService } from '../../../services/admin.service';

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

  constructor(private adminService: AdminService) {
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
