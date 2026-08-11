import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UiInputComponent } from '../../../../shared/components/ui-input.component';
import { UiButtonComponent } from '../../../../shared/components/ui-button.component';
import { AuthService } from '../../../../core/services/auth/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, UiInputComponent, UiButtonComponent],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent {

  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  private submitting = signal(false);
  isSubmitting = computed(() => this.submitting());

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  submit() {
    if (this.form.invalid || this.submitting()) return;

    const { username, password } = this.form.value;
    this.submitting.set(true);

    this.auth.login(username!, password!).subscribe({
      next: () => {
        this.submitting.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.submitting.set(false);
        alert('Credenciales inválidas');
      }
    });
  }
}
