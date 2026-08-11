import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  template: `
    <button class="ui-button" [type]="type" [disabled]="disabled"><ng-content></ng-content></button>
  `,
  styles: [
    `
      .ui-button { padding: 8px 14px; border-radius:6px; border: none; background:#1976d2; color:white; cursor:pointer }
      .ui-button[disabled] { opacity: 0.6; cursor: not-allowed }
    `
  ]
})
export class UiButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
}
