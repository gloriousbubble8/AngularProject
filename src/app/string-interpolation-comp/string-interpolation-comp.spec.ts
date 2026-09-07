import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StringInterpolationComp } from './string-interpolation-comp';

describe('StringInterpolationComp', () => {
  let component: StringInterpolationComp;
  let fixture: ComponentFixture<StringInterpolationComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringInterpolationComp],
    }).compileComponents();

    fixture = TestBed.createComponent(StringInterpolationComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
