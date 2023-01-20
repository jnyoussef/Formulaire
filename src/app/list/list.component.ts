import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
etudiants:any=[];
  constructor(private dataService:DataService) {
    this.etudiants=this.dataService.etudiants;
   }

  ngOnInit(): void {
  }
delete(e:any){
  this.dataService.etudiants.splice(e);
  this.etudiants.splice(e);
}
}
