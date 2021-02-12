import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Site } from '../../shared/model/site';
import {Client} from '../../shared/model/client';

@Component({
  selector: 'app-formulaire-demande-chantier',
  templateUrl: './formulaire-demande-chantier.component.html',
  styleUrls: ['./formulaire-demande-chantier.component.css']
})
export class FormulaireDemandeChantierComponent implements OnInit {
   demandeDeChantierForm = new FormGroup({
     site : new FormControl(''),
     heure: new FormControl(''),
     minute: new FormControl(''),
     adresse: new FormControl(''),
     employes: new FormControl(''),
     complement: new FormControl(''),
     codePostal: new FormControl(''),
     ville: new FormControl(''),
     materiel: new FormControl(''),
     description: new FormControl(''),
     particularite: new FormControl(''),
     regularite: new FormControl(''),
     informationsInternes: new FormControl(''),
     client: new FormControl(''),
   }
   );

   sites: Site[] = [];
   clients: Client[] = [];

   filtreClient = '';

  constructor() {
    this.sites.push(new Site(1, 'Beaulieu', 'Linh', 'François', 'rue du bélieré', '', ''));
    this.clients.push(new Client(1, 'Saint', 'Bernard', '', '', ''));
    this.clients.push(new Client(2, 'Castex', 'Jean', '', '', ''));
  }



  ngOnInit(): void {
  }

}
