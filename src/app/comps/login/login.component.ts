import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'Employee';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const suser: User = {
      username: this.username,
      password: this.password,
      role: this.role,
    };
    this.authService.login(suser).subscribe(
      (response: any) => {
        if (response) {
          // Store user data in local storage or session
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        } else {
          alert(
            'Login failed: ' + (response.message || 'Invalid credentials---')
          );
        }
      },
      (error) => {
        console.error('Login error', error);
        alert('Login error: ' + error.message);
      }
    );
  }
}
