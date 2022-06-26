import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent  implements OnInit{

  @Output() onEnter   :EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer:EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  constructor() { }
  termino:string = '';


  ngOnInit() { //ese se dispara ua sola vez, cuando el componente es creado y ya es utilizado
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.onDebouncer.emit( valor );
      })

    }
  buscar() {
    this.onEnter.emit(this.termino)
  }
   teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
