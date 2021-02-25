import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from '../../core/services/client.service';
import {Client} from '../../shared/model/client';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>();

    constructor(private route: ActivatedRoute,
                private changeDetectorRef: ChangeDetectorRef,
                private clientService: ClientService) {
    }

    ngOnInit(): void {
        this.creatTableSource();
        this.route.params.subscribe( () => this.creatTableSource());
    }

    creatTableSource(): void {
        this.clientService.getAllClients().subscribe(data => {
            this.changeDetectorRef.detectChanges();
            this.dataSource.data = data.reverse();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.length = data.length;
        });
    }

    toDeleteClient(id: number): void {
        this.clientService.deleteClientById(id.toString()).subscribe(data => 
        {
        this.dataSource.data.splice(data,1);
        this.dataSource.paginator = this.paginator;
        });
    }

}
