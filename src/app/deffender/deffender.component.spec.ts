import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeffenderComponent } from './deffender.component';

describe('DeffenderComponent', () => {
  let component: DeffenderComponent;
  let fixture: ComponentFixture<DeffenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeffenderComponent]
    });
    fixture = TestBed.createComponent(DeffenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
