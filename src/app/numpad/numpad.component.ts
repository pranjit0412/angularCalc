import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.css']
})
export class NumpadComponent implements OnInit {
  @Output() numpadButtonClickEvent = new EventEmitter<String>();
  @Output() lastRowClick = new EventEmitter<String>();
  
  constructor() { }
  items = ['9','8','7','6','5','4','3','2','1'];
  
  numberButtonEventTrigger(value:String)
  {
    
    this.numpadButtonClickEvent.emit(value);
  }
  operatorButton(value:String)
  {
    this.lastRowClick.emit(value);
  }
  ngOnInit() {
  }

}
