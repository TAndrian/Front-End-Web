import { Component, OnInit } from '@angular/core';
import {ChantierService} from '../../core/services/chantier.service';
import {Chantier} from '../../shared/model/chantier';

@Component({
  selector: 'app-list-chantiers',
  templateUrl: './list-chantiers.component.html',
  styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {
  
  chantiers: Chantier[]=[];

  constructor(private chantierService: ChantierService) { }

  ngOnInit(): void {
    this.getAllChantiers();
  }

  getAllChantiers(){
    //this.chantierService.getAllChantiers().subcribe((res:any)=>{
    //  this.chantiers = res
    //})
    this.chantiers.push(new Chantier(1,1,[1,1],[1,1],"AAA",[],"",null,null,null,2,"",null,"","",""))
  }

}
