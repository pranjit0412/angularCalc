import { BackendServeService } from './backend-serve.service';
import { CalserveService } from './calserve.service';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public operand;



  onNumpadButtonClick(value: String) {
    this.calSvc.numpadFun(+value);
    this.operand = this.calSvc.display();
  }
  onOperatorButtonClick(value: String) {

    if (value === 'back') {
      this.operand = this.calSvc.operBack(this.operand);

    }
    else if (value === 'C') {
      this.calSvc.operC();
      this.operand = this.calSvc.display();
    }
    else if (value === 'AC') {
      this.calSvc.operAC();
      this.operand = this.calSvc.display();
    }
    else if (value === '%') {

      this.operand = this.calSvc.operPer(this.operand);
    }
    else if (value === '=') {
      this.calSvc.operatorFun(value);

      this.operand = this.calSvc.display();
    }


    else {
      let returnValue = this.calSvc.operatorFun(value);
      
      if (returnValue) {
        this.operand = returnValue;
      }


    }

  }
 
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private calSvc: CalserveService, private backSvc: BackendServeService) {
    matIconRegistry.addSvgIcon(
      'angular',
      domSanitizer.bypassSecurityTrustResourceUrl('https://0t2.github.io/angular-material-notes/svg/angular.svg'))
      .addSvgIconInNamespace(
        'custom-svg',
        'angular',
        domSanitizer.bypassSecurityTrustResourceUrl('https://0t2.github.io/angular-material-notes/svg/angular_solidBlack.svg'))
      .addSvgIconSetInNamespace('core',
        domSanitizer.bypassSecurityTrustResourceUrl('https://0t2.github.io/angular-material-notes/svg/core-icon-set.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }
  ngOnInit()
  {
    this.backSvc.history().subscribe((data)=>{
      console.log("data:",data);
    })
  }
  


}
