import {Component, OnInit} from '@angular/core';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {DemandeDeChantierService} from '../../core/services/demande-de-chantier.service';
import {AffichageUtilsService} from '../affichage-utils.service';

@Component({
    selector: 'app-list-demande-de-chantier',
    templateUrl: './list-demande-de-chantier.component.html',
    styleUrls: ['./list-demande-de-chantier.component.css']
})
export class ListDemandeDeChantierComponent implements OnInit {
    demandesDeChantier: DemandeDeChantierGet[];

    constructor(
        private demandeDeChantierService: DemandeDeChantierService,
        public affichageUtilsService: AffichageUtilsService
    ) {
    }

    ngOnInit(): void {
    }

}
