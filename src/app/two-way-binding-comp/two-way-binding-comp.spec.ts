import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayBindingComp } from './two-way-binding-comp';

describe('TwoWayBindingComp', () => {
  let component: TwoWayBindingComp;
  let fixture: ComponentFixture<TwoWayBindingComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
