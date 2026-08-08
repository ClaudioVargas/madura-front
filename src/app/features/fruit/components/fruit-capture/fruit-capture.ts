import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CameraService } from '../../../services/camera-service';
import { FruitEvaluationService } from '../../../../core/services/fruit-evaluation-service';

@Component({
  selector: 'app-fruit-capture',
  imports: [],
  templateUrl: './fruit-capture.html',
  styleUrl: './fruit-capture.css',
})
export class FruitCapture {
 @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  private cameraService = inject(CameraService);
  private apiService = inject(FruitEvaluationService);

  fruitState = signal<string | null>(null);
  cameraStarted = signal<boolean>(false);

  async startCamera() {
    try {
      await this.cameraService.initCamera(this.video.nativeElement);
      this.cameraStarted.set(true);
    } catch (err) {
      console.error('No se pudo iniciar la cámara:', err);
      this.cameraStarted.set(false);
    }
  }

  async capture() {
    const file = this.cameraService.captureImage(
      this.video.nativeElement,
      this.canvas.nativeElement
    );

    try {
      // Ahora usamos el método async/await del ApiService
      await this.apiService.evaluateFruit(file);

      // Leemos el signal expuesto desde el servicio
      this.fruitState.set(this.apiService.fruitState());
    } catch (err) {
      console.error('Error en evaluación:', err);
      this.fruitState.set(null);
    }
  }
}
