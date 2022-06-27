import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino :string = '';
  hayError:boolean = false;
  paises  :Pais[] = [];
//**Esta clase accede al servicio que retorna la url y luego con subcribe dispara el observable*/
  buscar(termino:string){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscar({ termino: this.termino }).subscribe((paises) => {
      this.paises = paises;      
    } , (err) => {

        this.hayError = true;
        this.paises = [];
    })
  }

  sugerencias( termino:string) {
    this.hayError = false
    //TODO crear sugerencias
  }
  constructor(private paisService: PaisService) { }
}
