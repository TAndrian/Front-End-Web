import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Site } from '../../shared/model/site';
import {Client} from '../../shared/model/client';

@Component({
  selector: 'app-formulaire-nouveau-chantier',
  templateUrl: './formulaire-nouveau-chantier.component.html',
  styleUrls: ['./formulaire-nouveau-chantier.component.css']
})
export class FormulaireNouveauChantierComponent implements OnInit {
  nouveauChantierForm = new FormGroup({
    site : new FormControl(''),
    employee : new FormControl(''),
    regularite: new FormControl(''),
    heure: new FormControl(''),
    minute: new FormControl(''),
    particularite: new FormControl(''),
    adresse: new FormControl(''),
    complement: new FormControl(''),
    codePostal: new FormControl(''),
    ville: new FormControl(''),
    informationsInternes: new FormControl(''),
    materiel: new FormControl(''),
    description: new FormControl(''),
    client: new FormControl(''),
    nomDuChantier: new FormControl(''),
    status: new FormControl(''),
    telephone: new FormControl(''),
    duree: new FormControl(''),
    devis: new FormControl(''),
    uploadCSV: new FormControl(''),
    photoProleme: new FormControl,
    informationsSpecifique: new FormControl(''),
    signatures: new FormControl,
    problemeRemontee: new FormControl(''),
    preuveAchat: new FormControl,
  }
  );

  sites: Site[] = [];
  clients: Client[] = [];

  filtreClient = '';

  constructor() {
  //  this.sites.push(new Site('Beaulieu', 'Linh', 'François', 'rue du bélieré', '', ''));
  //  this.clients.push(new Client(1, 'Saint', 'Bernard', '', '', ''));
  //  this.clients.push(new Client(2, 'Castex', 'Jean', '', '', ''));
  }

  ngOnInit(): void {

  }

}
