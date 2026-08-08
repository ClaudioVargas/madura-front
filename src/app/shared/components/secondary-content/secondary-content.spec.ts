import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryContent } from './secondary-content';

describe('SecondaryContent', () => {
  let component: SecondaryContent;
  let fixture: ComponentFixture<SecondaryContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryContent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondaryContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
