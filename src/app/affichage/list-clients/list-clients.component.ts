import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../core/services/client.service';
import {Client} from '../../shared/model/client';

@Component({
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
    clients: Client[];

    constructor(
        private clientService: ClientService
    ) {
    }

    ngOnInit(): void {
    }

}
