import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
etudiants:any =[];
  constructor() { }
  getEtudiants(){
    return this.etudiants;
  }
}
