import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Followerservice {

    constructor(private http: HttpClient) {

    }

    getAllFollwers() {

        return this.http.get('http://api.github.com/users/mosh-hamedani/followers');
    }

}