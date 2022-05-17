import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private urlApi:string =  'https://restcountries.com/v3.1/';
  buscar(termino:string):Observable<Pais[]> {
    const url = `${this.urlApi}name/${termino}`;
    return this.http.get<Pais[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }

  constructor( private http:HttpClient) { }
}
