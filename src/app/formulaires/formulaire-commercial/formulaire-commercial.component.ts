import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from '../../shared/model/chantierGet';
import {FormControl, FormGroup} from '@angular/forms';
import {FormulaireEstimationComponent} from '../formulaire-estimation/formulaire-estimation.component';
import {ChantierService} from '../../core/services/chantier.service';

@Component({
  selector: 'app-formulaire-commercial',
  templateUrl: './formulaire-commercial.component.html',
  styleUrls: ['./formulaire-commercial.component.css']
})
export class FormulaireCommercialComponent implements OnInit {
  @Input() chantier: ChantierGet;
  @Input() standalone = true;
  @ViewChild(FormulaireEstimationComponent /* #name or Type*/, {static: false}) child;
  formCommercial: FormGroup;
  constructor(private chantierService: ChantierService) { }

  ngOnInit(): void {
    this.formCommercial = new FormGroup(
        {
          dateDebutTheorique: new FormControl((this.chantier.dateDebutTheorique != null) ? this.chantier.dateDebutTheorique : ''),
          dateFinTheorique: new FormControl((this.chantier.dateFinTheorique != null) ? this.chantier.dateFinTheorique : ''),
        }
    );
  }

  onSubmit(): void {
    const dateDebutTheorique: Date = this.formCommercial.controls.dateDebutTheorique.value === '' ? null : this.formCommercial.controls.dateDebutTheorique.value;
    const dateFinTheorique: Date = this.formCommercial.controls.dateFinTheorique.value === '' ? null : this.formCommercial.controls.dateFinTheorique.value;

    
    const chantierToUpdate = new Chantier(
        null, null, null, null, null, null, null, null, dateDebutTheorique, dateFinTheorique,
        null, null, null, null, null, null, null, null,
        this.chantier.conducteurPresent, null,  null, null, null, null);
    this.chantierService.updateChantierById(this.chantier.id + '', chantierToUpdate).subscribe();
    this.child.onSubmit();
  }
}
