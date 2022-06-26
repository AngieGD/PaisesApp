import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-ver-region',
  templateUrl: './ver-region.component.html',
  styleUrls: ['./ver-region.component.css']
})
export class VerRegionComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe( params => {
        console.log(params);
      })
  }

}
