import { ChangeDetectionStrategy, Component } from '@angular/core';
// 1. Importa el enrutador nativo de Angular
import { RouterOutlet } from '@angular/router';

// 2. Importa los componentes de Angular Material para el Sidenav
import { MatSidenavModule } from '@angular/material/sidenav';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { SecondaryContent } from '../secondary-content/secondary-content';
import { Footer } from '../footer/footer';

// 3. Importa tus propios componentes Standalone (reemplazan a los antiguos Modules)
// import { HeaderComponent } from './shared/components/header/header';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component'


@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavModule,
    Sidebar,
    Header,
    SecondaryContent,
    Footer,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSidebarOpen = true;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
