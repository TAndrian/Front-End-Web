import {Component, OnInit} from '@angular/core';
import {ChantierGet} from '../../shared/model/chantierGet';
import {ChantierService} from '../../core/services/chantier.service';
import {ActivatedRoute} from '@angular/router';
import {MatHorizontalStepper} from '@angular/material/stepper';
import {StatusIntervention} from '../../shared/model/statusIntervention';
import {Chantier} from '../../shared/model/chantier';

@Component({
  selector: 'app-stepper-fiche-intervention',
  templateUrl: './stepper-fiche-intervention.component.html',
  styleUrls: ['./stepper-fiche-intervention.component.css']
})
export class StepperFicheInterventionComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private chantierService: ChantierService
  ) { }
  chantier: ChantierGet;
  selectedIndex: number;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.chantierService.getChantierById(id).subscribe(
        (res: ChantierGet) =>
        {
          this.chantier = res;
          switch (this.chantier.statusIntervention){
            case StatusIntervention.ESTIMATION:
              this.selectedIndex = 0;
              break;
            case StatusIntervention.COMMERCIAL:
              this.selectedIndex = 1;
              break;
            case StatusIntervention.PLANNING:
              this.selectedIndex = 2;
              break;
          }
          console.log(this.chantier.statusIntervention + ' , ' + this.selectedIndex);
        }
    );
  }

  goForward(stepper: MatHorizontalStepper): void {
    switch (stepper.selectedIndex + 1){
      case 0:
        this.chantier.statusIntervention = StatusIntervention.ESTIMATION;
        break;
      case 1:
        this.chantier.statusIntervention = StatusIntervention.COMMERCIAL;
        break;
      case 2:
        this.chantier.statusIntervention = StatusIntervention.PLANNING;
        break;

    }
    const chantierToUpdate = new Chantier(
      this.chantier.site.id, this.chantier.client.id, this.chantier.problemes, this.chantier.medias,
        this.chantier.adresse, this.chantier.ouvriers, this.chantier.nbOuvrier,
        this.chantier.materiel, this.chantier.dateDebutTheorique, this.chantier.dateFinTheorique,
        this.chantier.estimationTemps, this.chantier.telephone, this.chantier.statusChantier,
        this.chantier.nomChantier, this.chantier.informationsInterne, this.chantier.description,
        this.chantier.dateDebutEffectif, this.chantier.dateFinEffectif, this.chantier.conducteurPresent,
        this.chantier.regularite, this.chantier.statusIntervention, this.chantier.volume, this.chantier.poid,
        this.chantier.accessibilite,
        this.chantier.joursRegularite, this.chantier.dateDebutRegularite, this.chantier.dateFinRegularite, this.chantier.rapportsRegulier
    );
    this.chantierService.updateChantierById(this.chantier.id + '', chantierToUpdate).subscribe(
        () => this.selectedIndex = this.chantier.statusIntervention[1]
    );
  }
}
