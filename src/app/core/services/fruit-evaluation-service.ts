import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';

// Tipado de la respuesta de tu API
export interface FruitEvaluationResponse {
  estado: string; 
}

@Service() // Configurado automáticamente en scope 'root' en Angular 22
export class FruitEvaluationService {
  // 1. Inyección de dependencias moderna sin constructor
  private readonly http = inject(HttpClient);
  
  // URL base (puedes inyectar tu Environmentaquí si lo prefieres)
  private readonly baseUrl = environment.apiUrl; 

  // 2. Estado reactivo privado usando Signals
  readonly #fruitState = signal<string | null>(null);

  // Exposición del estado como solo lectura para proteger la reactividad
  readonly fruitState = this.#fruitState.asReadonly();

  // 3. Método moderno con Async/Await y firstValueFrom
  async evaluateFruit(file: File): Promise<void> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Reemplazo moderno de .toPromise()
      const res = await firstValueFrom(
        this.http.post<FruitEvaluationResponse>(`${this.baseUrl}/fotos/evaluate`, formData)
      );

      if (res) {
        this.#fruitState.set(res.estado);
      }
    } catch (err) {
      console.error('Error en evaluación:', err);
      this.#fruitState.set(null);
    }
  }
}
