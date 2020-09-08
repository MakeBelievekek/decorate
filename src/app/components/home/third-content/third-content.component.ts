import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-content',
  templateUrl: './third-content.component.html',
  styleUrls: ['./third-content.component.css']
})
export class ThirdContentComponent implements OnInit {

  constructor() {
  }

  @Input() wallpaper: string;
  @Input() decoration: string;

  ngOnInit(): void {
    document.documentElement.style
      .setProperty('--wallpaperUrl', 'url(' + this.wallpaper + ')');
    document.documentElement.style
      .setProperty('--decorationUrl', 'url(' + this.decoration + ')');

  }

}
