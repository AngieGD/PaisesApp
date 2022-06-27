import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private urlApi:string =  'https://restcountries.com/v3.1/';
  public buscar({ termino }: { termino: string; }):Observable<Pais[]> {
    const url = `${this.urlApi}name/${termino}`;
    
    return this.http.get<Pais[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }

  public buscarCap({ termino }: { termino: string; }):Observable<Capital[]> {
    const url = `${this.urlApi}capital/${termino}`; //capital/{capital}
    return this.http.get<Capital[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }
  


  constructor( private http:HttpClient) { }
}
