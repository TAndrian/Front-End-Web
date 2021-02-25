import {Component, Input, OnInit} from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from '../../shared/model/chantierGet';
import {FormControl, FormGroup} from '@angular/forms';
import {ChantierService} from 'src/app/core/services/chantier.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-formulaire-administration',
  templateUrl: './formulaire-administration.component.html',
  styleUrls: ['./formulaire-administration.component.css']
})
export class FormulaireAdministrationComponent implements OnInit {
  @Input() chantier: ChantierGet;
  formAdministration: FormGroup;
  numbers: number[] = [];
  constructor(private chantierService: ChantierService) {
  }

  ngOnInit(): void {
      this.formAdministration = new FormGroup({
              materiel: new FormControl((this.chantier.materiel != null) ? this.chantier.materiel : ''),
              conducteur: new FormControl(''),
              dateDebutTheorique: new FormControl((this.chantier.dateDebutTheorique != null) ? this.chantier.dateDebutTheorique : ''),
              dateFinTheorique: new FormControl((this.chantier.dateFinTheorique != null) ? this.chantier.dateFinTheorique : ''),
          }
      );
      for (let i = 0; i < this.chantier.nbOuvrier; i++){
          this.numbers.push(i);
          this.formAdministration.addControl(String(i), new FormControl(''));
      }
  }

  onSubmit(): void {
        /*const materiel = this.formAdministration.materiel.value;
        const conducteur = this.formAdministration.conducteur.value;
        const dateDebutTheorique = this.formAdministration.dateDebutTheorique.value;
        const dateFinTheorique = this.formAdministration.dateFinTheorique.value;
        let chantierUpdated: Chantier;
        if (this.regularite) {
            chantierUpdated = new Chantier(
                this.chantier.siteId, this.chantier.clientId, null, null, null, null, null , materiel, dateDebutTheorique, dateFinTheorique,
                null, null, null, null, null, null, null, null,
                conducteur, true, this.chantier.statusIntervention, null, null, null,  null, null, null);
        } else {
            chantierUpdated = new Chantier(
                site.id, client.id, null, null, adresse, null, nbOuvrier, null, null, null,
                estimationTemps, telephone, statusChantier, nomChantier, informationsInterne, description, null, null,
                true, regularite,  this.chantier.statusIntervention, null, null, null);
        }
        this.chantierService.updateChantierById(this.chantier.id + '', chantierUpdated).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
                this.ngOnInit();
                window.location.reload();
            }
        );*/
    }

}
