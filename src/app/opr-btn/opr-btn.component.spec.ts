import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprBtnComponent } from './opr-btn.component';

describe('OprBtnComponent', () => {
  let component: OprBtnComponent;
  let fixture: ComponentFixture<OprBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
