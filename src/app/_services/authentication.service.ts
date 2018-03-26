import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { User } from '../_models/User';
 

@Injectable()
export class AuthenticationService {
    public user = new Subject<User>();
    constructor(private http: HttpClient){}

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                if (user && user.token){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.user.next(user);
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.user.next();
    }
}