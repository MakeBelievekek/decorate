import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.css']
})
export class SecondContentComponent implements OnInit {

  constructor() { }

  @Input() children: string;
  @Input() blackout: string;
  @Input() furniture: string;

  ngOnInit(): void {
   }

}
