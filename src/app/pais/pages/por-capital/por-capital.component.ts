import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino :string = '';
  hayError:boolean = false;
  capital  :Capital[] = [];
  buscar(termino:string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCap({ termino: this.termino }).subscribe(capital => {
      this.capital = capital;
      console.log(capital)
    }, (err) => {
      this.hayError = true;
      this.capital = [];

       
    })
  }
  
  
  sugerencias( termino:string) {
    this.hayError = false
    //TODO crear sugerencias
  }
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
