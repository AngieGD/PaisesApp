import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino :string = '';
  hayError:boolean = false;
  paises  :Pais[] = [];
  buscar(termino:string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscar(this.termino).subscribe(paises => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
       
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
