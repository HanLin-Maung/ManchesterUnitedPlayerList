import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdinfoComponent } from './mdinfo.component';

describe('MdinfoComponent', () => {
  let component: MdinfoComponent;
  let fixture: ComponentFixture<MdinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdinfoComponent]
    });
    fixture = TestBed.createComponent(MdinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
