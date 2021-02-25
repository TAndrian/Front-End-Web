import {Component, OnInit} from '@angular/core';
import {StatusType} from '../../shared/model/statusType';
import {ChantierGet} from '../../shared/model/chantierGet';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {Probleme} from '../../shared/model/probleme';
import {JourSemaineType} from '../../shared/model/jourSemaineType';
import {RapportChantierRegulier} from '../../shared/model/rapportChantierRegulier';
import {ActivatedRoute} from '@angular/router';
import {ChantierService} from '../../core/services/chantier.service';
import {AffichageUtilsService} from '../affichage-utils.service';

@Component({
    selector: 'app-detail-chantier',
    templateUrl: './detail-chantier.component.html',
    styleUrls: ['./detail-chantier.component.css']
})
export class DetailChantierComponent implements OnInit {
    chantier: ChantierGet;

    constructor(
        private route: ActivatedRoute,
        private chantierService: ChantierService,
        public affichageUtilService: AffichageUtilsService
    ) {

    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.chantierService.getChantierById(id).subscribe(
            (res: ChantierGet) => this.chantier = res
        );
    }

}
