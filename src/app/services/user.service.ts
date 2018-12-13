import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user.model";
import { Subject } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly _rootUrl = "http://localhost:3000/api/users";

  private addUserSubject: Subject<User> = new Subject<User>();
  addUser$ = this.addUserSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  addUser(user: User) {
    return this.httpClient.post(this._rootUrl, user, {
      headers: this.getHeader()
    }).pipe(tap(data => this.addUserSubject.next(data as User)));
  }

  getUsers() {
    // //
    // const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
    return this.httpClient.get(this._rootUrl, { headers: this.getHeader() });
  }

  private getHeader() {
    return { "content-type": "application/json" };
  }
}
