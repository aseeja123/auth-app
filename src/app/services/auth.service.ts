import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
headers:{}={
  'accept':'application/json',
  'auth':'bearer'+ sessionStorage
}
  constructor() { }
}
