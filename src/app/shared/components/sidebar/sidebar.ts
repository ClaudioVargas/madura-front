import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  navItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'assignment', label: 'Tareas', route: '/tasks' },
    { icon: 'bar_chart', label: 'Reportes', route: '/reports' },
    { icon: 'settings', label: 'Configuración', route: '/settings' }
  ];
}
