import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(
    name: string,
    email: string,
    password: string
  ): void {

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      'maisoné-user',
      JSON.stringify(user)
    );
  }

  login(
    email: string,
    password: string
  ): boolean {

    const savedUser =
      localStorage.getItem('maisoné-user');

    if (!savedUser) {
      return false;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem(
        'maisoné-token',
        'maisone-demo-token'
      );

      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('maisoné-token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('maisoné-token');
  }

}