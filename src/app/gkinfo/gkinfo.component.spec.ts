import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkinfoComponent } from './gkinfo.component';

describe('GkinfoComponent', () => {
  let component: GkinfoComponent;
  let fixture: ComponentFixture<GkinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GkinfoComponent]
    });
    fixture = TestBed.createComponent(GkinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
