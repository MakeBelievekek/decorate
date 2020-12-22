import { Injectable } from '@angular/core';
import { RegexService } from './regexService';

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
                return 'Textilkiegészít';
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
                return bread;
        }
    }
}
