import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {switchMap} from 'rxjs/operators'
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-region',
  templateUrl: './ver-region.component.html',
  styleUrls: ['./ver-region.component.css']
})
export class VerRegionComponent implements OnInit {
  public pais!: Pais;
  constructor(private activateRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

//    this.id = this.activateRoute.snapshot.paramMap.get('id')
      this.activateRoute.params
        .pipe(
          switchMap(({id}) => this.paisService.getForAlpha(id))
        )
        .subscribe(resp => {
          this.pais = resp;
          console.log(this.pais)
        });
    
//    this.activateRoute.params
//      .subscribe( ({id}) => {
//       this.paisService.getForAlpha(this.id)
//         .subscribe(pais => {
//           console.log(pais)
//         });
//      });   
  }

}
