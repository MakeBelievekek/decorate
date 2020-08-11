import {Component, OnInit} from '@angular/core';
import {FilterService} from '../../../services/filter.service';
import {FilterControlModel} from '../../../models/filterControl.model';

@Component({
  selector: 'app-active-filters',
  templateUrl: './active-filters.component.html',
  styleUrls: ['./active-filters.component.css']
})
export class ActiveFiltersComponent implements OnInit {
  filterControl: FilterControlModel;

  constructor(private filerService: FilterService) {
  }

  ngOnInit(): void {
    this.filterControl = this.filerService.filterControl;
  }

}
