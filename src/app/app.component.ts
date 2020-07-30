import {Component, HostListener, OnInit} from '@angular/core';
import {ModalControllerModel} from './models/modalController.model';
import {ModalService} from './services/modal.service';
import {ScreenService} from './services/screen.service';
import {ScreenControlModel} from './models/screenControl.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'decorate';
  modalControl: ModalControllerModel;
  screenControl: ScreenControlModel;
  bodyPressed: boolean;

  constructor(private modalService: ModalService, private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.modalControl = this.modalService.modalControl;
    this.screenControl = this.screenService.screenControl;
    this.changeContentOnResize();
  }

  @HostListener('window:resize', ['$event'])
  changeContentOnResize() {
    this.modalService.closeModal();
    this.screenService.getScreenSize();
    this.screenService.screenControlHandler();
    this.screenService.smallDropDownHandler();
  }

  closeModal() {
    if (this.modalControl.keepShowingModal && this.bodyPressed) {
      this.modalService.setModalButtonPressedFalse();
      this.bodyPressed = false;
    } else {
      this.modalService.closeModal();
    }
  }

  bodyClick() {
    this.bodyPressed = true;
    this.closeModal();
  }
}
