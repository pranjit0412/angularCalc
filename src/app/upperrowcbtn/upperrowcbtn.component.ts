import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upperrowcbtn',
  templateUrl: './upperrowcbtn.component.html',
  styleUrls: ['./upperrowcbtn.component.css']
})
export class UpperrowcbtnComponent implements OnInit {

  @Input() upperbutton: any;
  @Output() upbuttonEvent = new EventEmitter<any>();
  upperButtonEvent() {
    this.upbuttonEvent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
