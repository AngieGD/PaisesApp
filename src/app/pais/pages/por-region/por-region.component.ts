import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  public region:Pais[] = [];
  public regiones:string[] = [
                              'EU ',
                              'EFTA  ',
                              'CARICOM ',
                              'PA  ',
                              'AU  ',
                              'USAN  ',
                              'EEU ',
                              'AL ',
                              'ASEAN ',
                              'CAIS  ',
                              'CEFTA  ',
                              'NAFTA  ',
                              'SAARC  '
  ];
  public regionActiva:string = '';

  constructor(private paisService: PaisService) { }

  public verRegionActiva(region: string) {
    this.regionActiva = region;
    this.paisService.getRegion(region).subscribe(regi => {
      this.region = regi
    })

  }

}
