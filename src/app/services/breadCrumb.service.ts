import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BreadCrumbService {


    constructor() {

    }

    getBread(bread: string): string {
        switch (bread) {
            case 'fuggony': {
                return 'Függöny';
            }
            case 'termekek': {
                return 'Termékek';
            }
            case 'gyerekfuggony': {
                return 'Gyerekfüggöny';
            }
            case 'sotetitofuggony': {
                return 'Sötétítő függöny';
            }
            case 'fenyateresztofuggony': {
                return 'Fényáteresztő függöny';
            }
            case 'blackout': {
                return 'Blackout függöny';
            }
            case 'butorszovet': {
                return 'Bútorszövet';
            }
            case 'dekorfuggony': {
                return 'Dekorfüggöny';
            }
            case 'textilkiegeszito': {
                return 'Textilkiegészítő';
            }
            case 'tapeta': {
                return 'Tapéta';
            }
            case 'lakasdekoracio': {
                return 'Lakásdekoráció';
            }
            case 'parna': {
                return 'Párna';
            }
            default:
                const newBread = bread.split('?');
                return bread.includes('?') ? this.getBread(newBread[0]) : bread;


        }
    }
}
