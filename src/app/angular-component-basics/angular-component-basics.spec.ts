import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularComponentBasics } from './angular-component-basics';

describe('AngularComponentBasics', () => {
  let component: AngularComponentBasics;
  let fixture: ComponentFixture<AngularComponentBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularComponentBasics],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularComponentBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
