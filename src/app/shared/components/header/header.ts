import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../../core/services/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  // Define el evento de salida usando la nueva función funcional output()
  toggleSidebar = output<void>();
  notificationsLabel = '';
  router = inject(Router);
  auth = inject(AuthService);
  
  notifications = [
    { id: 1, message: 'Nueva actualización disponible' },
    { id: 2, message: 'Tienes 3 tareas pendientes' },
    { id: 3, message: 'Mensaje de soporte recibido' }
  ];
  
  ngOnInit(): void {
    this.generarNotificacionLabel;
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  onSearch(query: string): void {
    console.log('Buscando:', query);

    // Aquí podrías integrar un servicio de búsqueda global
  }

  onProfileAction(action: string): void {
    if (action === 'logout') {
      this.auth.logout();
      this.router.navigate(['/']);
      return;
    }

    if (action === 'perfil') {
      this.router.navigate(['/profile']);
      return;
    }

    console.log('Acción de perfil:', action);
  }

     // helper para template: devuelve boolean si hay token
  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  generarNotificacionLabel(): void {
    if (this.notifications.length == 0) {
      this.notificationsLabel = 'No hay notificaciones';
    }
    if (this.notifications.length == 1) {
      this.notificationsLabel = 'Tienes una notificación';
    }
    if (this.notifications.length > 1) {
      this.notificationsLabel = `Tienes ${this.notifications.length} notificaciones`;
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }


}
