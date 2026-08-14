import { Service } from '@angular/core';

@Service()
export class CameraService {
  private stream: MediaStream | null = null;

  

  async initCamera(videoElement: HTMLVideoElement): Promise<void> {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('La API de cámara no está disponible en este navegador.');
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        // video: true // Use the default camera
        video: { facingMode: 'environment' }, // Use the back camera if available
      });
      videoElement.srcObject = this.stream;
      await videoElement.play();
    } catch (err) {
      console.error('Error al acceder a la cámara:', err);
      throw err;
    }
  }

  stopCamera(): void {
    this.stream?.getTracks().forEach(track => track.stop());
    this.stream = null;
  }

  captureImage(videoElement: HTMLVideoElement, canvasElement: HTMLCanvasElement): File {
    const context = canvasElement.getContext('2d');
    if (!context) throw new Error('No se pudo obtener el contexto del canvas');

    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    context.drawImage(videoElement, 0, 0);

    const dataUrl = canvasElement.toDataURL('image/jpeg');
    const blob = this.dataURLtoBlob(dataUrl);
    return new File([blob], 'fruit.jpg', { type: 'image/jpeg' });
  }

  private dataURLtoBlob(dataUrl: string): Blob {
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
}
