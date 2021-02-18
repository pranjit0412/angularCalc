import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorPadComponent } from './operator-pad.component';

describe('OperatorPadComponent', () => {
  let component: OperatorPadComponent;
  let fixture: ComponentFixture<OperatorPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
