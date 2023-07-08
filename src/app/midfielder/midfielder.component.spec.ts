import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidfielderComponent } from './midfielder.component';

describe('MidfielderComponent', () => {
  let component: MidfielderComponent;
  let fixture: ComponentFixture<MidfielderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidfielderComponent]
    });
    fixture = TestBed.createComponent(MidfielderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
