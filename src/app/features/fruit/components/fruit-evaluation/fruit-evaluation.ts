import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FruitEvaluationService } from '../../../../core/services/fruit-evaluation-service';

@Component({
  selector: 'app-fruit-evaluation',
  imports: [TitleCasePipe],
  templateUrl: './fruit-evaluation.html',
  styleUrl: './fruit-evaluation.css',
})
export class FruitEvaluation {
  private readonly apiService = inject(FruitEvaluationService);

  fruitState = this.apiService.fruitState;

  fruitColor = computed(() => { 
    switch (this.fruitState()) {
      case 'verde':
        return '#fbbf24';
      case 'madura':
        return '#16a34a';
      case 'pasada':
        return '#dc2626';
      default:
        return '#475569';
    }
  });

  fruitIcon = computed(() => {
    switch (this.fruitState()) {
      case 'verde':
        return '❓';
      case 'madura':
        return '✅';
      case 'pasada':
        return '⚠️';
      default:
        return '🍊';
    }
  });

  fruitMessage = computed(() => {
    switch (this.fruitState()) {
      case 'verde':
        return 'La fruta aún está verde. Es recomendable esperar a que madure.';
      case 'madura':
        return 'La fruta está madura y lista para consumir.';
      case 'pasada':
        return 'La fruta ya está pasada. Se recomienda desecharla.';
      default:
        return 'Aún no hay una evaluación disponible.';
    }
  });
}
