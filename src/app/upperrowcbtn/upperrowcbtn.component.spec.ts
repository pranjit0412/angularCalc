import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperrowcbtnComponent } from './upperrowcbtn.component';

describe('UpperrowcbtnComponent', () => {
  let component: UpperrowcbtnComponent;
  let fixture: ComponentFixture<UpperrowcbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperrowcbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperrowcbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
