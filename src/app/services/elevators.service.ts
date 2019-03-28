import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ElevatorsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://elvtest-api.azurewebsites.net/elevator/getall');
  }
}
