import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BreadCrumbService {


    constructor() {

    }

    getBread(bread: string) :string {
        switch (bread) {
            case 'termekkategoriak': {
                return  'Termékkategoriák';
            }
            case 'fuggonyok': {
                return  'Függönyök';
            }
            case 'ifjusagi': {
                return  'Ifjúsági';
            }
            case 'sotetito': {
                return  'Sötétítő';
            }
            case 'fenyatereszto': {
                return  'Fényáteresztő';
            }
            case 'blackout': {
                return  'Blackout';
            }
            case 'textilkiegeszito': {
                return  'Textilkiegészítők';
            }
            case 'tapeta': {
                return  'Tapéták';
            }
            case 'lakasdekoracio': {
                return  'Lakásdekorációk';
            }
            case 'parna': {
                return  'Párnák';
            }
        }
    }
}
