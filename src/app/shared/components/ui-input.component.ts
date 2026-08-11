import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  template: `
    <label class="ui-input">
      <div class="label">{{ label }}</div>
      <input
        [type]="type"
        [value]="value"
        (input)="onInput($event.target.value)"
        [attr.placeholder]="placeholder"
        class="input"
      />
    </label>
  `,
  styles: [
    `
      .ui-input { display:block; margin-bottom: 12px }
      .label { font-size: 12px; color: #333; margin-bottom: 4px }
      .input { width:100%; padding:8px 10px; border:1px solid #ccc; border-radius:4px }
    `
  ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UiInputComponent), multi: true }
  ]
})
export class UiInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder = '';

  value = '';
  onChange: (v: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(v: any) {
    this.value = v;
    this.onChange(v);
  }
}
