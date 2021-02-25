import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';

@Component({
    selector: 'app-bar',
    templateUrl: './app-bar.component.html',
    styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
    @Input() title: string;

    

    constructor(private router: Router, public authentificationService: AuthentificationService) {
    }

    ngOnInit(): void {
        
    }

    onLogout(): void {
        if (localStorage.getItem("currentUser")) {
            this.authentificationService.logout();
            this.router.navigate(['/connexion']);
        }
    }

    

}
