import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const BASE_URL = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsersWithAddresses(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(BASE_URL);
  }

  public getUserWithAddresses(id: number): Observable<User> {
    return this.httpClient.get<User>(`${BASE_URL}/${id}`);
  }

  public createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(BASE_URL, user);
  }

  public updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${BASE_URL}/${id}`, user);
  }

  public deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${BASE_URL}/${id}`);
  }

}
