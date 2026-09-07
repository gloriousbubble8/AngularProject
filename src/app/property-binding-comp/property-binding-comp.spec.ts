import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyBindingComp } from './property-binding-comp';

describe('PropertyBindingComp', () => {
  let component: PropertyBindingComp;
  let fixture: ComponentFixture<PropertyBindingComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyBindingComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
