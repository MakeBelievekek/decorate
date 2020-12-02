import {Injectable} from '@angular/core';
import {SwitchModel} from '../models/switchModel';


@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  switchMod: SwitchModel = new class implements SwitchModel {
    category: boolean;
    product: boolean;
    payment: boolean;
  };

  switch(type: string) {
    switch (type) {
      case 'category':
        this.switchMod.payment = false;
        this.switchMod.category = true;
        this.switchMod.product = false;
        return this.switchMod;
      case 'payment':
        this.switchMod.category = false;
        this.switchMod.product = false;
        this.switchMod.payment = true;
        return this.switchMod;
      case 'product':
        this.switchMod.payment = false;
        this.switchMod.category = false;
        this.switchMod.product = true;
        return this.switchMod;
      default:
        return this.switchMod;
    }
  }
}
