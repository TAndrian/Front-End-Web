import {Component, Input, OnInit} from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from '../../shared/model/chantierGet';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulaire-administration',
  templateUrl: './formulaire-administration.component.html',
  styleUrls: ['./formulaire-administration.component.css']
})
export class FormulaireAdministrationComponent implements OnInit {
  @Input() chantier: ChantierGet;
  formAdministration = new FormGroup({
        materiel: new FormControl(''),
        conducteur: new FormControl(''),
        dateDebutTheorique: new FormControl(''),
        dateFinTheorique: new FormControl('')
      }
  );
  numbers: number[] = [];
  constructor() {
  }

  ngOnInit(): void {
      for (let i = 0; i < this.chantier.nbOuvrier; i++){
          this.numbers.push(i);
          this.formAdministration.addControl(String(i), new FormControl(''));
      }
  }

}
