import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { AlertService } from 'src/app/authentification/services/alert.service';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';
import { AuthentificationDialogueComponent } from 'src/app/authentification/components/authentification-dialogue/authentification-dialogue.component';

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.component.html',
  styleUrls: ['./formulaire-connexion.component.css']
})
export class FormulaireConnexionComponent implements OnInit {


  connexionForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }
  );
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
    private alertService: AlertService
  ) {
    if (this.authentificationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  openDialog() {
    this.dialog.open(AuthentificationDialogueComponent);
  }

  

  ngOnInit(): void {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(): void {
    const username = this.connexionForm.controls.username.value;
    const password = this.connexionForm.controls.password.value;

    
   
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    /*if (this.connexionForm.invalid) {
        return;
    }*/

    this.loading = true;
    this.authentificationService.login(username, password)
            .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
                },
              error => {
                  this.alertService.error(error, false);
                  this.loading = false;
                  this.openDialog();
              });

  }

}
