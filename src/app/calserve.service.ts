import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalserveService {
  private operand1: number;
  private operand2: number;
  private operator = null;
  private decimal = 1;
  private isDecimal = false;

  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
  }


  public numpadFun(value: number) {
    if (this.operator) {

      if (this.isDecimal) {
        this.operand2 = (value * (1 / Math.pow(10, this.decimal))) + this.operand2;
        this.decimal++;
      }
      else {
        this.operand2 = (this.operand2 * 10) + value;
        return this.operand2;
      }
    }
    else {
      if (this.isDecimal) {
        this.operand1 = (value * (1 / Math.pow(10, this.decimal))) + this.operand1;
        this.decimal++;
      }
      else {
        this.operand1 = (this.operand1 * 10) + value;
        return this.operand1;
      }
    }
  }

  operAddn() {
    return this.operand1 + this.operand2;
  }
  operSub() {
    return this.operand1 - this.operand2;
  }
  operMul() {
    return this.operand1 * this.operand2;
  }
  operDiv() {
    return this.operand1 / this.operand2;
  }

  operBack(operand) {
    var num = "" + operand;
    num = num.substring(0, num.length - 1);
    if (operand === this.operand1) {
      this.operand1 = +num;
    }
    else {
      this.operand2 = +num;
    }
    return +num;

  }
  operPer(num: number) {
    let retValue = this.operatorFun('=');

    if (retValue) {
      return retValue / 100;
    }
    else {
      return num / 100;
    }


  }
  operAC() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = null;
    this.isDecimal = false;
    this.decimal = 1;
  }
  operC() {
    this.operand2 = 0;
    this.isDecimal = false;
    this.decimal = 1;
  }
  results(oper: string) {

    console.log("oper:", oper);

    switch (oper) {
      case '+':
        return this.operAddn();

      case '-':
        return this.operSub();

      case 'x':
        return this.operMul();

      case '÷':
        return this.operDiv();
    }

  }

  operatorFun(value) {

    if (value === '.') {
      if (!this.isDecimal)
        this.decimal = 1;
      this.isDecimal = true;
    }
    else if (value === '=') {
      this.operand1 = this.results(this.operator);
      this.operand2 = 0;
      this.operator = null;
      return this.operand1;

    }
    else {

      if (this.operator) {
        this.operand1 = this.results(this.operator);

        this.operand2 = 0;

        this.operator = value;
        this.isDecimal = false;
        return this.operand1;
      }
      else {
        this.operator = value;
        this.isDecimal = false;
      }

    }
  }

  display() {

    return this.operator ? this.operand2 : this.operand1;

  }

}








                      
