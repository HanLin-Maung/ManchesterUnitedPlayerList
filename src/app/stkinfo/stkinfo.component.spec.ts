import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkinfoComponent } from './stkinfo.component';

describe('StkinfoComponent', () => {
  let component: StkinfoComponent;
  let fixture: ComponentFixture<StkinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StkinfoComponent]
    });
    fixture = TestBed.createComponent(StkinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
