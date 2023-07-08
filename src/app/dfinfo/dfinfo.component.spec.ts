import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfinfoComponent } from './dfinfo.component';

describe('DfinfoComponent', () => {
  let component: DfinfoComponent;
  let fixture: ComponentFixture<DfinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DfinfoComponent]
    });
    fixture = TestBed.createComponent(DfinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
