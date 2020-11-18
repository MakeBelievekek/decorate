import {Component, Input, OnInit} from '@angular/core';
import {ScreenSizeModel} from '../../../../models/ScreenSize.model';

@Component({
  selector: 'app-small-igmages',
  templateUrl: './small-igmages.component.html',
  styleUrls: ['./small-igmages.component.css']
})
export class SmallIgmagesComponent implements OnInit {
  @Input() smallImages: Array<string>;
  @Input() bigImageDimensions: ScreenSizeModel;

  constructor() {
  }

  ngOnInit(): void {
    this.smallImages = ['https://i.imgur.com/1nyTupT.jpg', 'https://i.imgur.com/1nyTupT.jpg', 'https://i.imgur.com/1nyTupT.jpg'];
  }

}
