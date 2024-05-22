import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  ngOnInit(): void {
  }
  
  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}
