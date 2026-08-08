import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitEvaluation } from './fruit-evaluation';

describe('FruitEvaluation', () => {
  let component: FruitEvaluation;
  let fixture: ComponentFixture<FruitEvaluation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitEvaluation],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitEvaluation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
