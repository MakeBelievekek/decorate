import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RegexService {

    urlWithoutAccents(text: string) {
        let newText = text.toLowerCase();
        newText = newText.replace(new RegExp('\\s', 'g'), '');
        newText = newText.replace(new RegExp('[àáâãäå]', 'g'), 'a');
        newText = newText.replace(new RegExp('æ', 'g'), 'ae');
        newText = newText.replace(new RegExp('ç', 'g'), 'c');
        newText = newText.replace(new RegExp('[èéêë]', 'g'), 'e');
        newText = newText.replace(new RegExp('[ìíîï]', 'g'), 'i');
        newText = newText.replace(new RegExp('ñ', 'g'), 'n');
        newText = newText.replace(new RegExp('[òóôõöő]', 'g'), 'o');
        newText = newText.replace(new RegExp('œ', 'g'), 'oe');
        newText = newText.replace(new RegExp('[ùúûüű]', 'g'), 'u');
        newText = newText.replace(new RegExp('[ýÿ]', 'g'), 'y');
        newText = newText.replace(new RegExp('\\W', 'g'), '');
        return newText;
    }

    convertName(name: string) {
        let newName = name.replace(/\s+/g, '-').toLowerCase();
        return newName;
    }
}
