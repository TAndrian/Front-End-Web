import { Component, OnInit } from '@angular/core';
import {ChantierGet} from '../../shared/model/chantierGet';
import {ChantierService} from '../../core/services/chantier.service';
import {ActivatedRoute} from '@angular/router';
import {Step} from '../../shared/model/step';
import {FormControl} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material/stepper';

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
  static selectedStepIndex = 0;
  chantier: ChantierGet;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.chantierService.getChantierById(id).subscribe(
        (res: ChantierGet) =>
        {
          this.chantier = res;
        }
    );
  }

  goForward(stepper: MatHorizontalStepper): void {
    stepper.next();
  }
}
