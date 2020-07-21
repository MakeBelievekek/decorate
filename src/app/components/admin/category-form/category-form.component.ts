import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {

    categoryForm: FormGroup;


    constructor(private adminService: AdminService, private formBuilder: FormBuilder, private http: HttpClient) {
        this.categoryForm = this.formBuilder.group({
            categoryName: [''],
            categoryType: [''],
        });
    }

    ngOnInit(): void {
    }

    saveCategory() {

    }


}
