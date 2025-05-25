import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isShowPassword: Boolean = false;
  showPasswordValueChanges!: Subscription | undefined;
  isSubmitLoading: Boolean = false;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      showPassword: [false]
    })

    this.showPasswordValueChanges = this.loginForm.get('showPassword')?.valueChanges.subscribe((value) => {
      this.isShowPassword = value;
    })
  }

  ngOnDestroy(): void {
    if (this.showPasswordValueChanges) {
      this.showPasswordValueChanges.unsubscribe();
    }
  }

  async onSubmit(): Promise<void> {
    try {
      this.isSubmitLoading = true;
    } catch (error) {
      console.error(error);
    } finally {
      this.isSubmitLoading = false;
    }
  }
}
