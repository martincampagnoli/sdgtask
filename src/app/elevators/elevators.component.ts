import { Component, OnInit } from '@angular/core';
import { Elevator } from '../models/elevator';
import { ElevatorsService } from '../services/elevators.service';

@Component({
  selector: 'app-elevators',
  templateUrl: './elevators.component.html',
  styleUrls: ['./elevators.component.css']
})
export class ElevatorsComponent implements OnInit {
  elevators: Elevator[] = [];

  constructor(private elevatorsService: ElevatorsService) {
  }

  ngOnInit() {
    let elevators$ = this.elevatorsService.getAll();
    elevators$.subscribe(
                response => {
                        this.elevators = response as Elevator[]
                      });
  }

}
