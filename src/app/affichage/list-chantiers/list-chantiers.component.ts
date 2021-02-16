import { Component, OnInit } from '@angular/core';
import {ChantierService} from '../../core/services/chantier.service';
import {ChantierGet} from '../../shared/model/chantierGet';
import {StatusType} from '../../shared/model/statusType';

@Component({
  selector: 'app-list-chantiers',
  templateUrl: './list-chantiers.component.html',
  styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {
  
  chantiers: ChantierGet[]=[];
  ouvriers = new Set<string>();
  constructor(private chantierService: ChantierService) {
    
   }

  ngOnInit(): void {
    this.getAllChantiers();
  }

  getAllChantiers(){
    //this.chantierService.getAllChantiers().subcribe((res:any)=>{
    //  this.chantiers = res
    //})
    this.chantiers.push(new ChantierGet(1,null, null,null,null,"AAA",this.ouvriers,"",null,null,2,"",StatusType.DEMARRE,"","","",null,null,false))
  }

}
