import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  passwordStrengthMessage: string = '';

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      password: ['', [Validators.required, this.strongPasswordValidator.bind(this)]]
    });

    this.signupForm.get('password')?.valueChanges.subscribe(value => {
      this.passwordStrengthMessage = this.getPasswordStrengthMessage(value);
    });
  }

  goToPage(pageName: string): void {
    console.log(`Navigating to ${pageName} page`);
    this.router.navigate([pageName]);
  }

  private strongPasswordValidator(control: any): { [key: string]: boolean } | null {
    const password = control.value;
    let strength = 0;

    // Check length
    if (password.length >= 8) {
      strength++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength++;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength++;
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
      strength++;
    }

    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
      strength++;
    }

    // Password is strong if it meets at least 4 of the criteria
    if (strength >= 4) {
      return null;
    } else {
      return { 'weakPassword': true };
    }
  }

  private getPasswordStrengthMessage(password: string): string {
    let strength = 0;

    // Check length
    if (password.length >= 8) {
      strength++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength++;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength++;
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
      strength++;
    }

    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
      strength++;
    }

    // Display password strength message
    switch (strength) {
      case 0:
        return 'Password must contain at least 8 characters, including a number, a special character, and both uppercase and lowercase letters.';
      case 1:
        return 'Weak password';
      case 2:
        return 'Moderate password';
      case 3:
        return 'Good password';
      case 4:
        return 'Strong password';
      case 5:
        return 'Very strong password';
      default:
        return '';
    }
  }
}
