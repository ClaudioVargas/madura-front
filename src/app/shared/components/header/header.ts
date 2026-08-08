import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

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
export class Header {
  // Define el evento de salida usando la nueva función funcional output()
  toggleSidebar = output<void>();

  notifications = [
    { id: 1, message: 'Nueva actualización disponible' },
    { id: 2, message: 'Tienes 3 tareas pendientes' },
    { id: 3, message: 'Mensaje de soporte recibido' }
  ];

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  onSearch(query: string): void {
    console.log('Buscando:', query);
    // Aquí podrías integrar un servicio de búsqueda global
  }

  onProfileAction(action: string): void {
    console.log('Acción de perfil:', action);
    // Ejemplo: redirigir a perfil o cerrar sesión
  }
}
