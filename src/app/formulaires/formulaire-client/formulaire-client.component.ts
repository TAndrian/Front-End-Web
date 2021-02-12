import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
