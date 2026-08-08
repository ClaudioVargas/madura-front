import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-secondary-content',
  imports: [
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './secondary-content.html',
  styleUrl: './secondary-content.css'
})
export class SecondaryContent {
  filters = [
    { label: 'Pendientes', icon: 'hourglass_empty' },
    { label: 'Completadas', icon: 'check_circle' },
    { label: 'Archivadas', icon: 'archive' }
  ];

  widgets = [
    { title: 'Estadísticas rápidas', icon: 'bar_chart' },
    { title: 'Notas recientes', icon: 'note' }
  ];
}
