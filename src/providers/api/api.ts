import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const apiUrl = "https://someserver.com/api/"
@Injectable()
export class ApiProvider {


  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getUsers() {
    // this.api.getUsers().subscribe((users) => {
    //   this.users = users;
    // });
    return this.http.get(apiUrl + 'users').map(res => res.json());

  }

  addUser(username, password) {
    // this.api.addUser(this.username, this.password).subscribe((res) => {
    //   this.loading.dismiss();
    // });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let credentials = {
      username: username,
      password: password
    };

    return this.http.post(apiUrl + 'users', JSON.stringify(credentials), { headers: headers });

  }

}
