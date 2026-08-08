import { TestBed } from '@angular/core/testing';
import { FruitEvaluationService } from './fruit-evaluation-service';


describe('FruitEvaluationService', () => {
  let service: FruitEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
