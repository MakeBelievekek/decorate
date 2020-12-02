import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {DummyModel} from '../models/dummyModel';
import {HomeModel} from '../models/homeModel';

const BASE_URL = environment.apiUrl;
const AUT_HEADER = new HttpHeaders({
  ContentType: 'application/json',
  Authorization: 'Bearer ' +
    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpbyIsImlhdCI6MTYwNjY3NDQ3MH0.LjJaC6f5Wqxk4q8HMwhiT4NA6StWTxqy1_KAZvzv9Z-7647qsOh7eEl2BHReJqCCfDgWPUqjPkgHu2AdIdRNi8OlJOJHZXPwrltuR15-fsD9toT9R3qWyTgzOjkcjXOCJSt0Plrkv-FubPv1Ae9DdwEq1SNf16IvW8M0IorAP1GuN8-pS0tdWzj7BhMe1bDgsCESMbq-_cJn35V2yhN0UAW68VEkhlcxF75_UR2iThd2xklgsF0f5pww-sEaWxk_FWaB5QsdezRv8yEmHnGTEDeIzpwd2aLQcp3EQKrbjwrtL8GQXgeEBdYgLpcdOVBS21HxMSptlVq45-YDxO2VbA'

});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  testDummyEndPoint(): Observable<DummyModel> {
    return this.http.get<any>('http://localhost:8080/api/public/dummy', {
      headers: {
        Authorization: 'Bearer ' +
          'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpbyIsImlhdCI6MTYwNjY3NDQ3MH0.LjJaC6f5Wqxk4q8HMwhiT4NA6StWTxqy1_KAZvzv9Z-7647qsOh7eEl2BHReJqCCfDgWPUqjPkgHu2AdIdRNi8OlJOJHZXPwrltuR15-fsD9toT9R3qWyTgzOjkcjXOCJSt0Plrkv-FubPv1Ae9DdwEq1SNf16IvW8M0IorAP1GuN8-pS0tdWzj7BhMe1bDgsCESMbq-_cJn35V2yhN0UAW68VEkhlcxF75_UR2iThd2xklgsF0f5pww-sEaWxk_FWaB5QsdezRv8yEmHnGTEDeIzpwd2aLQcp3EQKrbjwrtL8GQXgeEBdYgLpcdOVBS21HxMSptlVq45-YDxO2VbA'
      }
    });


  }

  getHomeImages(): Observable<HomeModel[]> {
    return this.http.get<HomeModel[]>('http://localhost:8080/api/public/home');
  }

  hello(): Observable<any> {
    return this.http.get<any>('http://loaclhost:8080/api/auth/hello'
    );
  }

}



/*
eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJpbyIsImlhdCI6MTYwNjY3NDQ3MH0.LjJaC6f5Wqxk4q8HMwhiT4NA6StWTxqy1_KAZvzv9Z-7647qsOh7eEl2BHReJqCCfDgWPUqjPkgHu2AdIdRNi8OlJOJHZXPwrltuR15-fsD9toT9R3qWyTgzOjkcjXOCJSt0Plrkv-FubPv1Ae9DdwEq1SNf16IvW8M0IorAP1GuN8-pS0tdWzj7BhMe1bDgsCESMbq-_cJn35V2yhN0UAW68VEkhlcxF75_UR2iThd2xklgsF0f5pww-sEaWxk_FWaB5QsdezRv8yEmHnGTEDeIzpwd2aLQcp3EQKrbjwrtL8GQXgeEBdYgLpcdOVBS21HxMSptlVq45-YDxO2VbA
 */
