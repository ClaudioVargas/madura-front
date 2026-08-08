import { Component, computed, inject } from '@angular/core';
import { FruitEvaluationService } from '../../../../core/services/fruit-evaluation-service';

@Component({
  selector: 'app-fruit-evaluation',
  imports: [],
  templateUrl: './fruit-evaluation.html',
  styleUrl: './fruit-evaluation.css',
})
export class FruitEvaluation {
    private readonly apiService = inject(FruitEvaluationService
    );

  // Signal expuesto desde el servicio
  fruitState = this.apiService.fruitState;

  // Computed para asignar color dinámico según estado
  fruitColor = computed(() => {
    const estado = this.fruitState();
    switch (estado) {
      case 'verde': return 'green';
      case 'madura': return 'orange';
      case 'pasada': return 'red';
      default: return 'black';
    }
  });
}
