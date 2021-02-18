import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalserveService } from './../calserve.service';


@Component({
  selector: 'app-upperrow',
  templateUrl: './upperrow.component.html',
  styleUrls: ['./upperrow.component.css']
})
export class UpperrowComponent implements OnInit {


  @Output() uprrowbuttonClick = new EventEmitter<String>();


  constructor() { }
  items = ['C', 'AC', 'back', '%'];
  upperbuttonEventTrigger(value: String) {
    this.uprrowbuttonClick.emit(value);
  }


  ngOnInit() {
  }

}
