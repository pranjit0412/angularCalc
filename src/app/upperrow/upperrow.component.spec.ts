import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperrowComponent } from './upperrow.component';

describe('UpperrowComponent', () => {
  let component: UpperrowComponent;
  let fixture: ComponentFixture<UpperrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
