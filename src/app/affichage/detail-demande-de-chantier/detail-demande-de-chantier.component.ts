import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeDeChantierService} from '../../core/services/demande-de-chantier.service';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {AffichageUtilsService} from '../affichage-utils.service';
import {ChantierGet} from '../../shared/model/chantierGet';
import {Chantier} from '../../shared/model/chantier';
import {ChantierService} from '../../core/services/chantier.service';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-detail-demande-de-chantier',
    templateUrl: './detail-demande-de-chantier.component.html',
    styleUrls: ['./detail-demande-de-chantier.component.css']
})
export class DetailDemandeDeChantierComponent implements OnInit {
    demandeDeChantier: DemandeDeChantierGet;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private demandeDeChantierService: DemandeDeChantierService,
        private chantierService: ChantierService,
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

    createNewSheet(): void {
        const fiche = new Chantier(this.demandeDeChantier.site.id, this.demandeDeChantier.client.id, null, null, this.demandeDeChantier.adresse,
            null, null, null, null, null, null,
            null, null, null, this.demandeDeChantier.informationsInterne, this.demandeDeChantier.description,
            null, null, null, null);
        this.chantierService.addChantier(fiche).subscribe(
            (res: HttpResponse<any>) => {
                this.router.navigateByUrl('fiche-intervention/' + res.headers.get('location').split('/')[2]);
            }
        );
    }
}
