import {Component, Input, OnInit} from '@angular/core';
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
import {ChantierGet} from '../../shared/model/chantierGet';
import {ActivatedRoute} from '@angular/router';
import {MatOptionSelectionChange} from '@angular/material/core';

@Component({
    selector: 'app-formulaire-estimation',
    templateUrl: './formulaire-estimation.component.html',
    styleUrls: ['./formulaire-estimation.component.css']
})
export class FormulaireEstimationComponent implements OnInit {
    nouveauChantierForm = new FormGroup({
            nbOuvrier: new FormControl(''),
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
    states = [StatusType.DEMARRE, StatusType.ENCOURS, StatusType.ENATTENTE, StatusType.TERMINE];
    sites: Site[] = [];
    clients: Client[] = [];
    regularite = false;
    jourSemaineType: typeof JourSemaineType = JourSemaineType;
    joursRegularite: Set<JourSemaineType> = new Set();
    @Input() chantier: ChantierGet;
    @Input() standalone = true;
    filtreClient = '';
    selectedSite: Site;
    selectedClient: Client;


    constructor(private chantierService: ChantierService,
                private clientService: ClientService,
                private siteService: SiteService,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.getClients();
        this.getSites();
        this.selectedSite =  this.chantier.site;
        this.selectedClient =  this.chantier.client;
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
        });
    }

    getSites(): void {
        this.siteService.getAllSites().subscribe(data => {
            data.forEach(element => {
                this.sites.push(element);
            });
        });
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
        const site = this.selectedSite;
        const client = this.selectedClient;
        const nbOuvrier = this.nouveauChantierForm.controls.nbOuvrier.value === '' ? null : this.nouveauChantierForm.controls.nbOuvrier.value;
        console.log(nbOuvrier);
        const adresse = this.nouveauChantierForm.controls.adresse.value + ','
            + this.nouveauChantierForm.controls.complement.value + ','
            + this.nouveauChantierForm.controls.codePostal.value + ','
            + this.nouveauChantierForm.controls.ville.value;

        const dateDebutTheorique = this.nouveauChantierForm.controls.dateDebutTheorique.value === '' ? null : this.nouveauChantierForm.controls.dateDebutTheorique.value;
        const dateFinTheorique = this.nouveauChantierForm.controls.dateFinTheorique.value === '' ? null : this.nouveauChantierForm.controls.dateFinTheorique.value;
        const estimationTemps = this.nouveauChantierForm.controls.estimationTemps.value === '' ? null : this.nouveauChantierForm.controls.estimationTemps.value;
        const particularite = this.nouveauChantierForm.controls.particularite.value === '' ? null : this.nouveauChantierForm.controls.particularite.value;

        const telephone = this.nouveauChantierForm.controls.telephone.value === '' ? null : this.nouveauChantierForm.controls.telephone.value;
        const statusChantier = (this.nouveauChantierForm.controls.statusChantier.value === '') ? StatusType.ENATTENTE : null;
        const nomChantier = this.nouveauChantierForm.controls.nomChantier.value === '' ? null : this.nouveauChantierForm.controls.nomChantier.value;

        const regularite = this.regularite;
        const description = this.nouveauChantierForm.controls.description.value === '' ? null : this.nouveauChantierForm.controls.description.value;
        const informationsInterne = this.nouveauChantierForm.controls.informationsInternes.value === '' ? null : this.nouveauChantierForm.controls.informationsInternes.value;

        const dateDebutRegularite = this.nouveauChantierForm.controls.dateDebutRegularite.value === '' ? null : this.nouveauChantierForm.controls.dateDebutRegularite.value;
        const dateFinRegularite = this.nouveauChantierForm.controls.dateFinRegularite.value === '' ? null : this.nouveauChantierForm.controls.dateFinRegularite.value;
        const joursRegularite = this.joursRegularite;

        let chantierUpdated: Chantier;
        if (this.regularite) {
            chantierUpdated = new Chantier(
                site.id, client.id, null, null, adresse, null, nbOuvrier , null, dateDebutTheorique, dateFinTheorique,
                estimationTemps, telephone, statusChantier, nomChantier, informationsInterne, description, null, null,
                regularite, true, this.chantier.statusIntervention, null, null, null,  joursRegularite, dateDebutRegularite, dateFinRegularite);
        } else {
            chantierUpdated = new Chantier(
                site.id, client.id, null, null, adresse, null, nbOuvrier, null, dateDebutTheorique, dateFinTheorique,
                estimationTemps, telephone, statusChantier, nomChantier, informationsInterne, description, null, null,
                true, regularite,  this.chantier.statusIntervention, null, null, null);
        }
        this.chantierService.updateChantierById(this.chantier.id + '', chantierUpdated).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
                this.ngOnInit();
            }
        );
    }

    changeSite(site: Site): void {
        this.selectedSite = site;
    }
    changeClient(client: Client): void {
        this.selectedClient = client;
    }
}
