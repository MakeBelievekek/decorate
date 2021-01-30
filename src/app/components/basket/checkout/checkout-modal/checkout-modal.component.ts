import { AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderSubjectDto } from '../../../../models/orderSubjectDto';
import { CheckoutService } from '../../../../services/checkout.service';
import { LocalStorageService } from '../../../../services/localStorage.service';

const ORDER_KEY = 'local_orderList';

@Component({
    selector: 'app-checkout-modal',
    templateUrl: './checkout-modal.component.html',
    styleUrls: ['./checkout-modal.component.css'],
})
export class CheckoutModalComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(private checkoutService: CheckoutService, private modalService: BsModalService, private localStorageService: LocalStorageService) { }

    @Input() order: OrderSubjectDto = new OrderSubjectDto();
    isOpen: boolean = false;
    @ViewChild('template') template: TemplateRef<any>;
    modalRef: BsModalRef;
    unSubscribe$ = new Subject<void>();

    ngOnInit(): void {

    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    ngAfterViewInit(): void {
        this.checkoutService.modalTriggerObservable$.pipe(takeUntil(this.unSubscribe$)).subscribe((data) => {
            this.isOpen = data;
            if (this.isOpen) {
                setTimeout(() => {this.openModal(this.template);}, 2000);
                this.checkoutService.reset();
                this.localStorageService.deleteItem(ORDER_KEY);
            }
        });
    }

    ngOnDestroy(): void {
        this.unSubscribe$.next();
        this.unSubscribe$.complete();
    }
}
