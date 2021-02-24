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
  nouveauChantierForm = new FormGroup({
        materiel: new FormControl(''),
        conducteur: new FormControl(''),
        dateDebutTheorique: new FormControl(''),
        dateFinTheorique: new FormControl('')
      }
  );
  constructor() {
    /*for (let i = 0; i < this.chantier.nbOuvrier; i++){
      this.nouveauChantierForm.addControl(String(i), new FormControl(''));
    }*/
  }

  ngOnInit(): void {
      for (let i = 0; i < this.chantier.nbOuvrier; i++){
      this.nouveauChantierForm.addControl(String(i), new FormControl(''));
    }
  }

}
