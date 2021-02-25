import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-authentification-dialogue',
  templateUrl: './authentification-dialogue.component.html',
  styleUrls: ['./authentification-dialogue.component.css']
})
export class AuthentificationDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AuthentificationDialogueComponent>) { }

  closeDialog() {
    this.dialogRef.close() }

  ngOnInit(): void {
  }

}
