import {Component} from '@angular/core';
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorate';

  constructor(private modalService: ModalService) {

  }

  hideModal() {
    this.modalService.bodyClick();
    console.log('Body Clicked')
  }

}
