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
  buscar(){
    this.hayError = false;
    this.paisService.buscar(this.termino).subscribe((paises) => {
      this.paises = paises;
      console.log(paises[0].cca2)
      
    } , (err) => {

        this.hayError = true;
        this.paises = [];
    })
  }
  constructor(private paisService: PaisService) { }

 

}
