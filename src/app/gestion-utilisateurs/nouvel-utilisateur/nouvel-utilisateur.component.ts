import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RoleType} from '../../shared/model/roleType';

@Component({
    selector: 'app-nouvel-utilisateur',
    templateUrl: './nouvel-utilisateur.component.html',
    styleUrls: ['./nouvel-utilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit {
    rolesTypeKeys = [];
    utilisateurForm = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl(''),
        role: new FormControl(''),
    });

    constructor() {
        this.rolesTypeKeys = Object.values(RoleType).filter(
            f => Number(f) || f === 0
        );
        console.log(this.rolesTypeKeys);
    }

    ngOnInit(): void {
    }

    prettifyRole(role: RoleType): string {
        switch (role) {
            case RoleType.ADMINISTRATION:
                return 'Administration';
            case RoleType.CHEFDESITE:
                return 'Chef de site';
            case RoleType.DIRECTION:
                return 'Direction';
            case RoleType.TELEPHONE:
                return 'Téléphone';
        }
    }
}
