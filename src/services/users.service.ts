import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/interfaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${environment.endpointUrl}/api/users`);
  }

  public getUser(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${environment.endpointUrl}/api/users/${id}`);
  }
}