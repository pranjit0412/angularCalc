import { CalserveService } from './../calserve.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cal-btn',
  templateUrl: './cal-btn.component.html',
  styleUrls: ['./cal-btn.component.css']
})
export class CalBtnComponent implements OnInit {
  @Output() numpadEvents = new EventEmitter<String>();

  @Input() padNumber: any;
  numpadEventTrigger() {
    this.numpadEvents.emit();
  }


  constructor() { }

  ngOnInit() {

  }

}
