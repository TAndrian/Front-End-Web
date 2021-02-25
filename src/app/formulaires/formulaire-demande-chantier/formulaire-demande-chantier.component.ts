import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {DemandeDeChantierService} from 'src/app/core/services/demande-de-chantier.service';
import {ClientService} from 'src/app/core/services/client.service';
import {SiteService} from 'src/app/core/services/site.service';
import {DemandeDeChantier} from 'src/app/shared/model/demandeDeChantier';
import {HttpResponse} from '@angular/common/http';
import {JourSemaineType} from 'src/app/shared/model/jourSemaineType';
import {Router} from '@angular/router';


@Component({
    selector: 'app-formulaire-demande-chantier',
    templateUrl: './formulaire-demande-chantier.component.html',
    styleUrls: ['./formulaire-demande-chantier.component.css']
})
export class FormulaireDemandeChantierComponent implements OnInit {
    demandeDeChantierForm = new FormGroup({
            site: new FormControl(''),
            client: new FormControl(''),
            nombreEmployes: new FormControl(''),
            materiel: new FormControl(''),

            adresse: new FormControl(''),
            complement: new FormControl(''),
            codePostal: new FormControl(''),
            ville: new FormControl(''),

            regulariteFormControl: new FormControl(''),
            estimationTemps: new FormControl(''),
            particularite: new FormControl(''),
            description: new FormControl(''),
            informationsInterne: new FormControl(''),

            dateDebutRegularite: new FormControl(''),
            dateFinRegularite: new FormControl(''),


        }
    );

    sites: Site[] = [];
    clients: Client[] = [];
    regularite: boolean = false;
    jourSemaineType: typeof JourSemaineType = JourSemaineType;
    joursRegularite: Set<JourSemaineType> = new Set();

    filtreClient = '';

    constructor(private demandeDeChantierService: DemandeDeChantierService,
                private clientService: ClientService,
                private router: Router,
                private siteService: SiteService) {
        
    }


    ngOnInit(): void {
        // Recuperation des Clients et Sites à partir de la BDD
        this.getClients();
        this.getSites();
    }

    resetJours(): void {
        this.joursRegularite = new Set();
    }

    change(jour: JourSemaineType): void {
        if (this.joursRegularite.has(jour)) {
            this.joursRegularite.delete(jour);
            console.log("Removing" + jour);
        } else if (jour) {
            this.joursRegularite.add(jour);
            console.log("Adding" + jour);
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

    onSubmit(): void {

        const site = this.demandeDeChantierForm.controls.site.value===''?null:this.demandeDeChantierForm.controls.site.value;
        const client = this.demandeDeChantierForm.controls.client.value===''?null:this.demandeDeChantierForm.controls.client.value;
        
        const adresse = this.demandeDeChantierForm.controls.adresse.value + ','
            + this.demandeDeChantierForm.controls.complement.value + ','
            + this.demandeDeChantierForm.controls.codePostal.value + ','
            + this.demandeDeChantierForm.controls.ville.value;

        
        const estimationTemps = this.demandeDeChantierForm.controls.estimationTemps.value===''?null:this.demandeDeChantierForm.controls.estimationTemps.value;
        const particularite = this.demandeDeChantierForm.controls.particularite.value===''?null:this.demandeDeChantierForm.controls.particularite.value;
        const description = this.demandeDeChantierForm.controls.description.value===''?null:this.demandeDeChantierForm.controls.description.value;
        const informationsInterne = this.demandeDeChantierForm.controls.informationsInterne.value===''?null:this.demandeDeChantierForm.controls.informationsInterne.value;

        let chantier: DemandeDeChantier;
        chantier = new DemandeDeChantier(
                site.id, client.id, null, null, adresse, null,
                estimationTemps, particularite, description, informationsInterne);
        this.demandeDeChantierService.addDemandeDeChantier(chantier).subscribe(
            (res: HttpResponse<any>) => {
                this.router.navigateByUrl('detail-demande-de-chantier/' + res.headers.get('location').split('/')[2]);
            }
        );

    }
}
