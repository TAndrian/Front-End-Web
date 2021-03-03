import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from '../../shared/model/chantierGet';
import {FormControl, FormGroup} from '@angular/forms';
import {FormulaireCommercialComponent} from '../formulaire-commercial/formulaire-commercial.component';
import { ChantierService } from 'src/app/core/services/chantier.service';

@Component({
  selector: 'app-formulaire-administration',
  templateUrl: './formulaire-administration.component.html',
  styleUrls: ['./formulaire-administration.component.css']
})
export class FormulaireAdministrationComponent implements OnInit {
  @Input() chantier: ChantierGet;
  @ViewChild(FormulaireCommercialComponent, {static: false}) child;
  formAdministration: FormGroup;
  numbers: number[] = [];
  constructor(private chantierService: ChantierService) {
  }

  ngOnInit(): void {
      this.formAdministration = new FormGroup({
              conducteur: new FormControl(this.chantier.conducteurPresent),
              }
      );
      let ouvrierArray = Array.from(this.chantier.ouvriers);
      for (let i = 0; i < this.chantier.nbOuvrier; i++){
          this.numbers.push(i);
          this.formAdministration.addControl(String(i), new FormControl(ouvrierArray[i]?ouvrierArray[i]:''));
      }
  }
   onSubmit(): void {
        let ouvriers: string[] = [];
        for (let i = 0; i < this.chantier.nbOuvrier; i++){
          ouvriers.push(this.formAdministration.get(i.toString()).value);
        }
        const conducteurPresent = this.formAdministration.controls.conducteur.value;

        const chantierToUpdate = new Chantier(
          null, null, null, null, null, ouvriers, null, null, null, null,
          null, null, null, null, null, null, null, null,conducteurPresent,
          null);
      this.chantierService.updateChantierById(this.chantier.id + '', chantierToUpdate).subscribe();
        this.child.onSubmit();
    }
}
