import {Component, Input, OnInit} from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from '../../shared/model/chantierGet';

@Component({
  selector: 'app-formulaire-commercial',
  templateUrl: './formulaire-commercial.component.html',
  styleUrls: ['./formulaire-commercial.component.css']
})
export class FormulaireCommercialComponent implements OnInit {
  @Input() chantier: ChantierGet;
  constructor() { }

  ngOnInit(): void {
  }

}
