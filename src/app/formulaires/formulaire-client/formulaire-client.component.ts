import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientService} from 'src/app/core/services/client.service';
import {Client} from 'src/app/shared/model/client';

@Component({
    selector: 'app-formulaire-client',
    templateUrl: './formulaire-client.component.html',
    styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent implements OnInit {

    clientForm = new FormGroup({

        nom: new FormControl(''),
        prenom: new FormControl(''),
        adresse: new FormControl(''),
        complement: new FormControl(''),
        codePostal: new FormControl(''),
        ville: new FormControl(''),
        mail: new FormControl(''),
        infoComplementaire: new FormControl(''),

    })
    client: Client;

    constructor(private clientService: ClientService) {
    }

    ngOnInit(): void {
        //this.testAPI();
    }

    onSubmit(): void {

        const nom = this.clientForm.controls.nom.value;
        const prenom = this.clientForm.controls.prenom.value;
        const mail = this.clientForm.controls.mail.value;
        const infoComplementaire = this.clientForm.controls.infoComplementaire.value;

        const adresse = this.clientForm.controls.adresse.value + ', '
            + this.clientForm.controls.complement.value + ', '
            + this.clientForm.controls.codePostal.value + ', '
            + this.clientForm.controls.ville.value;

        var client = new Client(nom, prenom, adresse, mail, infoComplementaire)
        console.log('Client: ' + client);
        console.log('nom: ' + client.nom);
        this.clientService.addClient(client).subscribe(
            (res: HttpResponse<any>) => {
                console.log(res.headers.get('Location'));
            }
        );
    }

    /**
     * Fonction pour tester les CRUD
     */
    testAPI(): void {

        this.clientService.deleteClientById('4').subscribe();
        var clientt = new Client("toto", "toto", "toto", "toto", "toto");
        this.clientService.updateClientById('7', clientt).subscribe(data => {
            console.log("Adresse: " + data.adresse);
            this.client = data;
        });

        console.log("Client: " + this.client);
    }

}
