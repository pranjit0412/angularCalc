import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opr-btn',
  templateUrl: './opr-btn.component.html',
  styleUrls: ['./opr-btn.component.css']
})
export class OprBtnComponent implements OnInit {
  @Input() oprVar: any;
  @Output() newEvent = new EventEmitter<any>();

  operatorEventTrigger()
  {
    this.newEvent.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
