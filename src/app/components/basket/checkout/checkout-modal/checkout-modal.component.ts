import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { delay, take } from 'rxjs/operators';
import { OrderModel } from '../../../../models/orderModel';
import { OrderSubjectDto } from '../../../../models/orderSubjectDto';
import { CheckoutService } from '../../../../services/checkout.service';

@Component({
    selector: 'app-checkout-modal',
    templateUrl: './checkout-modal.component.html',
    styleUrls: ['./checkout-modal.component.css'],
})
export class CheckoutModalComponent implements OnInit, AfterViewInit {

    constructor(private checkoutService: CheckoutService, private modalService: BsModalService) { }

    @Input() order: OrderSubjectDto;
    @ViewChild('template') template: TemplateRef<any>;
    modalRef: BsModalRef;

    ngOnInit(): void {

    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    ngAfterViewInit(): void {
        this.checkoutService.modalTriggerObservable$.pipe(take(1), delay(1000)).subscribe((data) => {
            if (data) {
                this.openModal(this.template);
                this.checkoutService.reset();
            }
        });
    }
}
