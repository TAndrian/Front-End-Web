import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SiteService} from 'src/app/core/services/site.service';
import {Site} from 'src/app/shared/model/site';

@Component({
    selector: 'app-formulaire-site',
    templateUrl: './formulaire-site.component.html',
    styleUrls: ['./formulaire-site.component.css']
})
export class FormulaireSiteComponent implements OnInit {

    siteForm = new FormGroup({
        nomSite: new FormControl(''),
        nomChef: new FormControl(''),
        prenomChef: new FormControl(''),
        adresse: new FormControl(''),
        complement: new FormControl(''),
        codePostal: new FormControl(''),
        ville: new FormControl(''),
        mail: new FormControl(''),
        telephone: new FormControl(''),
    })

    constructor(private siteService: SiteService) {
    }

    ngOnInit(): void {
        //this.testAPI();
    }


    onSubmit(): void {

        const nomSite = this.siteForm.controls.nomSite.value;
        const nomChef = this.siteForm.controls.nomChef.value;
        const prenomChef = this.siteForm.controls.prenomChef.value;
        const telephone = this.siteForm.controls.telephone.value;
        const mail = this.siteForm.controls.mail.value;

        const adresse = this.siteForm.controls.adresse.value + ', '
            + this.siteForm.controls.complement.value + ', '
            + this.siteForm.controls.codePostal.value + ', '
            + this.siteForm.controls.ville.value;

        var site = new Site(nomSite, nomChef, prenomChef, adresse, mail, telephone)
        console.log('Site: ' + site);
        console.log('Nom Site: ' + site.nomSite);

        this.siteService.addSite(site).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
            }
        );
    }

    testAPI(): void {

        //this.siteService.deleteSiteById("1").subscribe();
        var newSite = new Site("toto", "toto", "toto", "toto", "toto", "toto");
        this.siteService.updateSiteById("2", newSite).subscribe();
        this.siteService.getSiteById("2").subscribe(data => {
            console.log("Adresse GET: " + data.adresse);
        })

    }

}
