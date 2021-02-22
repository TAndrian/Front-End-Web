import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DemandeDeChantierService} from '../../core/services/demande-de-chantier.service';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {AffichageUtilsService} from '../affichage-utils.service';

@Component({
    selector: 'app-detail-demande-de-chantier',
    templateUrl: './detail-demande-de-chantier.component.html',
    styleUrls: ['./detail-demande-de-chantier.component.css']
})
export class DetailDemandeDeChantierComponent implements OnInit {
    demandeDeChantier: DemandeDeChantierGet;

    constructor(
        private route: ActivatedRoute,
        private demandeDeChantierService: DemandeDeChantierService,
        public affichageUtilsService: AffichageUtilsService
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id !== null && this.demandeDeChantier == null) {
        this.demandeDeChantierService.getDemandeDeChantierById(id).subscribe(
            (res: DemandeDeChantierGet) => this.demandeDeChantier = res
        );
        }
    }

}
