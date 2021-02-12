import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
