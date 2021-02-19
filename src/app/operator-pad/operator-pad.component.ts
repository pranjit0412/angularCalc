import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CalserveService } from './../calserve.service';

@Component({
  selector: 'app-operator-pad',
  templateUrl: './operator-pad.component.html',
  styleUrls: ['./operator-pad.component.css']
})
export class OperatorPadComponent implements OnInit {

@Output() operatorButtonClickEvent = new EventEmitter<String>();
  
  constructor() { }
  items = ['+','-','x','÷'];
  operButtonEventTrigger(value:String)
  {
    
    this.operatorButtonClickEvent.emit(value);
  }
  
  

  ngOnInit() {
   
  }

}
