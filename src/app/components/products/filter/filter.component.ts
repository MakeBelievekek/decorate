import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  toggleOrderModal() {
    this.modalService.toggleModal('order');
  }
}
