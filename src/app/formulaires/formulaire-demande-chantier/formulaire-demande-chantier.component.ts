import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {DemandeDeChantierService} from 'src/app/core/services/demande-de-chantier.service';
import {ClientService} from 'src/app/core/services/client.service';
import {SiteService} from 'src/app/core/services/site.service';
import {DemandeDeChantier} from 'src/app/shared/model/demandeDeChantier';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-formulaire-demande-chantier',
    templateUrl: './formulaire-demande-chantier.component.html',
    styleUrls: ['./formulaire-demande-chantier.component.css']
})
export class FormulaireDemandeChantierComponent implements OnInit {
    demandeDeChantierForm = new FormGroup({
            site: new FormControl(''),
            heure: new FormControl(''),
            minute: new FormControl(''),
            adresse: new FormControl(''),
            nombreEmployes: new FormControl(''),
            complement: new FormControl(''),
            codePostal: new FormControl(''),
            ville: new FormControl(''),
            materiel: new FormControl(''),
            description: new FormControl(''),
            particularite: new FormControl(''),
            regularite: new FormControl(''),
            infoInterne: new FormControl(''),
            client: new FormControl(''),
        }
    );

    sites: Site[] = [];
    clients: Client[] = [];

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
        this.testAPI();
    }


    testAPI(): void {
        this.clientService.getClientById("6").subscribe(data => {
            this.clients.push(data);
        })
        this.siteService.getSiteById("2").subscribe(data => {
            this.sites.push(data);
        })

        const ddc = new DemandeDeChantier(2, 6, 5, 'bois', 'toto', 'toto', 5, 'toto', 'toto', 'toto',);
        //TODO: Quand on update, ça ne change pas les réferences
        //this.demandeDeChantierService.updateDemandeDeChantierById('1',ddc).subscribe();
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

        const client = this.demandeDeChantierForm.controls.client.value;
        const site = this.demandeDeChantierForm.controls.site.value;
        const description = this.demandeDeChantierForm.controls.description.value;
        const estimationTemps = this.demandeDeChantierForm.controls.heure.value;

        const nombreEmployes = this.demandeDeChantierForm.controls.nombreEmployes.value;
        const materiel = this.demandeDeChantierForm.controls.materiel.value;

        const regularite = this.demandeDeChantierForm.controls.regularite.value;
        const particularite = this.demandeDeChantierForm.controls.particularite.value;
        const infoInterne = this.demandeDeChantierForm.controls.infoInterne.value;

        const adresse = this.demandeDeChantierForm.controls.adresse.value + ', '
            + this.demandeDeChantierForm.controls.complement.value + ', '
            + this.demandeDeChantierForm.controls.codePostal.value + ', '
            + this.demandeDeChantierForm.controls.ville.value;


        this.demandeDeChantierService.addDemandeDeChantier(new DemandeDeChantier(
            site.id, client.id, nombreEmployes, materiel, adresse, regularite,
            estimationTemps, particularite, description, infoInterne
        )).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
            }
        );

    }
}
