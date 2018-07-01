import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers<T>(loginName: string): Observable<T> {
    return this.http.get<T>(`https://api.github.com/search/users?q=${loginName}+in:login`);
  }
}
