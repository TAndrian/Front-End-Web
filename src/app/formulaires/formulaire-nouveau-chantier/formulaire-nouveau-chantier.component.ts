import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {ChantierService} from 'src/app/core/services/chantier.service';
import {ClientService} from 'src/app/core/services/client.service';
import {SiteService} from 'src/app/core/services/site.service';
import {Chantier} from 'src/app/shared/model/chantier';
import {HttpResponse} from '@angular/common/http';
import {JourSemaineType} from 'src/app/shared/model/jourSemaineType';
import {StatusType} from 'src/app/shared/model/statusType';

@Component({
    selector: 'app-formulaire-nouveau-chantier',
    templateUrl: './formulaire-nouveau-chantier.component.html',
    styleUrls: ['./formulaire-nouveau-chantier.component.css']
})
export class FormulaireNouveauChantierComponent implements OnInit {
    nouveauChantierForm = new FormGroup({
            site: new FormControl(''),
            client: new FormControl(''),
            ouvriers: new FormControl(''),
            materiel: new FormControl(''),

            adresse: new FormControl(''),
            complement: new FormControl(''),
            codePostal: new FormControl(''),
            ville: new FormControl(''),

            dateDebutTheorique: new FormControl(),
            dateFinTheorique: new FormControl(),
            estimationTemps: new FormControl(''),
            particularite: new FormControl(''),

            telephone: new FormControl(''),
            statusChantier: new FormControl(''),
            nomChantier: new FormControl(''),

            informationsInternes: new FormControl(''),
            description: new FormControl(''),

            dateDebutRegularite: new FormControl(),
            dateFinRegularite: new FormControl(),
        }
    );
    states = [];
    sites: Site[] = [];
    clients: Client[] = [];
    regularite: boolean = false;
    jourSemaineType: typeof JourSemaineType = JourSemaineType;
    joursRegularite: Set<JourSemaineType> = new Set();

    filtreClient = '';

    constructor(private chantierService: ChantierService,
                private clientService: ClientService,
                private siteService: SiteService) {
        this.states = Object.values(StatusType).filter(
            f => Number(f) || f === 0
        );
    }

    ngOnInit(): void {
    }

    resetJours(): void {
        this.joursRegularite = new Set();
    }

    change(jour: JourSemaineType): void {
        if (this.joursRegularite.has(jour)) {
            this.joursRegularite.delete(jour);
        } else if (jour) {
            this.joursRegularite.add(jour);
        }
    }

    getClients(): void {
        this.clientService.getAllClients().subscribe(data => {
            data.forEach(element => {
                this.clients.push(element);
            });
        })
    }

    getSites(): void {
        this.siteService.getAllSites().subscribe(data => {
            data.forEach(element => {
                this.sites.push(element);
            });
        })
    }

    status(state: StatusType): string {
        switch (state) {
            case StatusType.DEMARRE:
                return 'Démarre';
            case StatusType.ENATTENTE:
                return 'En attente';
            case StatusType.ENCOURS:
                return 'En cours';
            case StatusType.TERMINE:
                return 'Terminé';
        }
    }

    onSubmit(): void {
        const site = this.nouveauChantierForm.controls.site.value;
        const client = this.nouveauChantierForm.controls.client.value;
        const ouvriers = this.nouveauChantierForm.controls.ouvriers.value;
        const materiel = this.nouveauChantierForm.controls.materiel.value;

        const adresse = this.nouveauChantierForm.controls.adresse.value + ', '
            + this.nouveauChantierForm.controls.complement.value + ', '
            + this.nouveauChantierForm.controls.codePostal.value + ', '
            + this.nouveauChantierForm.controls.ville.value;

        const dateDebutTheorique = this.nouveauChantierForm.controls.dateDebutTheorique.value;
        const dateFinTheorique = this.nouveauChantierForm.controls.dateFinTheorique.value;
        const estimationTemps = this.nouveauChantierForm.controls.estimationTemps.value;
        const particularite = this.nouveauChantierForm.controls.particularite.value;

        const telephone = this.nouveauChantierForm.controls.telephone.value;
        const statusChantier = this.nouveauChantierForm.controls.statusChantier.value;
        const nomChantier = this.nouveauChantierForm.controls.nomChantier.value;

        const regularite = this.regularite;
        const description = this.nouveauChantierForm.controls.description.value;
        const informationsInterne = this.nouveauChantierForm.controls.informationsInternes.value;

        const dateDebutRegularite = this.nouveauChantierForm.controls.dateDebutRegularite.value;
        const dateFinRegularite = this.nouveauChantierForm.controls.dateFinRegularite.value;
        const joursRegularite = this.joursRegularite;

        var chantier: Chantier;
        if (this.regularite) {
            chantier = new Chantier(
                site.id, client.id, null, null, adresse, ouvriers, materiel, dateDebutTheorique, dateFinTheorique,
                estimationTemps, telephone, statusChantier, nomChantier, informationsInterne, description, null, null,
                regularite, joursRegularite, dateDebutRegularite, dateFinRegularite);
        } else {
            chantier = new Chantier(
                site.id, client.id, null, null, adresse, ouvriers, materiel, dateDebutTheorique, dateFinTheorique,
                estimationTemps, telephone, statusChantier, nomChantier, informationsInterne, description, null, null,
                regularite);
        }
        this.chantierService.addChantier(chantier).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
            }
        );

    }

}
