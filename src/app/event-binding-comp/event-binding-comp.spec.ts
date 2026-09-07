import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBindingComp } from './event-binding-comp';

describe('EventBindingComp', () => {
  let component: EventBindingComp;
  let fixture: ComponentFixture<EventBindingComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingComp],
    }).compileComponents();

    fixture = TestBed.createComponent(EventBindingComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
