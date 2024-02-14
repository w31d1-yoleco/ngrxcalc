import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcserviceconnectService {

  private serviceurl = "https://api.mathjs.org/v4/?"

  constructor(private http: HttpClient) { }

  getSquareRootFromServiceWithParameter(param: number): Observable<String>{
    return this.http.get<String>(`${this.serviceurl}expr=sqrt(${param})`)
  }
}
