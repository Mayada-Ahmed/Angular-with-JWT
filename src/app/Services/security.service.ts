import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { authenticationResponse, userCredentials } from './../Models/security.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/account';
  private tokenKey: string = 'token';
  private expirationTokenKey: string = 'token-expiration';

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      return false;
    }

    const expire = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date

    if (expirationDate <= new Date()){
      return false;
    }

    return true;
  }

  getRole(): string {
    return '';
  }

  register(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(this.apiURL + '/register', userCredentials);
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(this.apiURL + '/login', userCredentials);
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(this.expirationTokenKey, authenticationResponse.expiration.toString())
  }
}
