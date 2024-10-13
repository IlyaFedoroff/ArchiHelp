import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Пример простейшей проверки (замените на вашу логику)
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      this.router.navigate(['/']); // Перенаправление на главную страницу
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Возвращает статус авторизации
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/']); // Перенаправление на главную страницу
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
