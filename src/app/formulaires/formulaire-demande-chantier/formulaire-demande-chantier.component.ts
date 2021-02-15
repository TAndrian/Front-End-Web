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
                private siteService: SiteService) {
        //Faudrait implementer les "getAllClients" et "getAllSites" niveau back ;)

        //  this.sites.push(new Site('Beaulieu', 'Linh', 'François', 'rue du bélieré', '', ''));
        //  this.clients.push(new Client('Saint', 'Bernard', '', '', ''));
        //  this.clients.push(new Client('Castex', 'Jean', '', '', ''));
    }


    ngOnInit(): void {
        //  this.testAPI();

        //----METHODES A IMPLEMENTER------
        //  this.getClients();
        //  this.getSites();
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

    testAPI(): void {
        this.clientService.getClientById("6").subscribe(data => {
            this.clients.push(data);
        })
        this.siteService.getSiteById("2").subscribe(data => {
            this.sites.push(data);
        })

        const ddc = new DemandeDeChantier(2, 7, 5, 'bois', 'dddd', true, 5, 'toto', 'toto', 'toto', new Date(), new Date(), new Set<JourSemaineType>());
        //TODO: Quand on update, ça ne change pas les réferences
        this.demandeDeChantierService.updateDemandeDeChantierById('7', ddc).subscribe(data => {
                console.log(data);
            }
        );
        //this.demandeDeChantierService.deleteDemandeDeChantierById('3');
    }

    /*
      getClients() : void {
        this.clientService.getAllClients().subscribe(data => {
          data.forEach(element => {
            this.clients.push(element);
          });
        })
      }
    */

    /*
      getSites() : void {
        this.siteService.getAllSites().subscribe(data => {
          data.forEach(element => {
            this.sites.push(element);
          });
        })
      }
    */
    onSubmit(): void {

        const site = this.demandeDeChantierForm.controls.site.value;
        const client = this.demandeDeChantierForm.controls.client.value;
        const nombreEmployes = this.demandeDeChantierForm.controls.nombreEmployes.value;
        const materiel = this.demandeDeChantierForm.controls.materiel.value;

        const adresse = this.demandeDeChantierForm.controls.adresse.value + ', '
            + this.demandeDeChantierForm.controls.complement.value + ', '
            + this.demandeDeChantierForm.controls.codePostal.value + ', '
            + this.demandeDeChantierForm.controls.ville.value;

        const regularite = this.regularite;
        const estimationTemps = this.demandeDeChantierForm.controls.estimationTemps.value;
        const particularite = this.demandeDeChantierForm.controls.particularite.value;
        const description = this.demandeDeChantierForm.controls.description.value;
        const informationsInterne = this.demandeDeChantierForm.controls.informationsInterne.value;

        const dateDebutRegularite = this.demandeDeChantierForm.controls.dateDebutRegularite.value;
        const dateFinRegularite = this.demandeDeChantierForm.controls.dateFinRegularite.value;
        const joursRegularite = this.joursRegularite;

        var chantier: DemandeDeChantier;
        if (this.regularite) {
            chantier = new DemandeDeChantier(
                site.id, client.id, nombreEmployes, materiel, adresse, regularite,
                estimationTemps, particularite, description, informationsInterne,
                dateDebutRegularite, dateFinRegularite, joursRegularite);
        } else {
            chantier = new DemandeDeChantier(
                site.id, client.id, nombreEmployes, materiel, adresse, regularite,
                estimationTemps, particularite, description, informationsInterne);
        }
        this.demandeDeChantierService.addDemandeDeChantier(chantier).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
            }
        );

    }
}
