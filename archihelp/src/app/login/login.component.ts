import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Добавьте FormsModule здесь
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const success = this.authService.login(this.username, this.password);
    if (!success) {
      alert('Неверные данные для входа.');
    }
  }
}
