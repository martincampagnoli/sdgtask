import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Elevator } from '../models/elevator';

@Component({
  selector: 'app-elevators',
  templateUrl: './elevators.component.html',
  styleUrls: ['./elevators.component.css']
})
export class ElevatorsComponent implements OnInit {
  elevators: Elevator[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs$ = this.http.get('https://elvtest-api.azurewebsites.net/elevator/getall');
    obs$.subscribe((response) => this.elevators = response as Elevator[]));
  }

}
