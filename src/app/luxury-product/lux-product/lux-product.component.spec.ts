import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxProductComponent } from './lux-product.component';

describe('LuxProductComponent', () => {
  let component: LuxProductComponent;
  let fixture: ComponentFixture<LuxProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
