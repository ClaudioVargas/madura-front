import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCapture } from './fruit-capture';

describe('FruitCapture', () => {
  let component: FruitCapture;
  let fixture: ComponentFixture<FruitCapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitCapture],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitCapture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
