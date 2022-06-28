import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  
  private urlApi:string =  'https://restcountries.com/v';
  public buscar({ termino }: { termino: string; }):Observable<Pais[]> {
    const url = `${this.urlApi}3.1/name/${termino}`;
    
    return this.http.get<Pais[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }

  public buscarCap({ termino }: { termino: string; }):Observable<Capital[]> {
    const url = `${this.urlApi}3.1/capital/${termino}`; //capital/{capital}
    return this.http.get<Capital[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }
  
  public getForAlpha(id: string):Observable<Pais> {
    const url = `${this.urlApi}2/alpha/${id}`; //capital/{capital}
    return this.http.get<Pais>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }
// https://restcountries.com/v2/regionalbloc/{regionalbloc}
  
  public getRegion(id: string):Observable<Pais[]> {
    const url = `${this.urlApi}2/regionalbloc/${id}`; //capital/{capital}
    return this.http.get<Pais[]>(url);
              // .pipe(
              //   catchError(err => of(
              //     ['Hay un error']
              //   ))
              // )
  }


  constructor( private http:HttpClient) { }
}
