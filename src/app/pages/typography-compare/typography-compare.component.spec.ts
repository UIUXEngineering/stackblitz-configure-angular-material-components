import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyCompareComponent } from './typography-compare.component';

describe('TypographyComponent', () => {
  let component: TypographyCompareComponent;
  let fixture: ComponentFixture<TypographyCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographyCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographyCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
