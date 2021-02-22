import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {DemandeDeChantierService} from '../../core/services/demande-de-chantier.service';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {AffichageUtilsService} from '../affichage-utils.service';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-list-demande-de-chantier',
    templateUrl: './list-demande-de-chantier.component.html',
    styleUrls: ['./list-demande-de-chantier.component.css']
})
export class ListDemandeDeChantierComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<DemandeDeChantierGet> = new MatTableDataSource<DemandeDeChantierGet>();

    constructor(
        private route: ActivatedRoute,
        private demandeDeChantierService: DemandeDeChantierService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.creatTableSource();
        this.route.params.subscribe( () => this.creatTableSource());

    }

    creatTableSource(): void {
        this.demandeDeChantierService.getAllDemandeDeChantiers().subscribe(data => {
            this.changeDetectorRef.detectChanges();
            this.dataSource.data = data;
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.length = data.length;
        });
    }

    toDeleteDemande(id: number): void {
        this.demandeDeChantierService.deleteDemandeDeChantierById(id.toString()).subscribe(data => 
        {console.log("delete");
        this.dataSource.data.splice(data,1);
        this.dataSource.paginator = this.paginator;
        });
    }


}
