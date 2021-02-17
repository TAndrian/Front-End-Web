import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {DemandeDeChantierService} from '../../core/services/demande-de-chantier.service';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {AffichageUtilsService} from '../affichage-utils.service';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const client: Client = new Client("Rennes", "Jean", "Pierre", "AAAAAA", "");
const site: Site = new Site("Rennes", "Jean", "Pierre", "AAAAAA", "", "");
const demande: DemandeDeChantierGet = new DemandeDeChantierGet(1, site, client, 3, "","", false, 4, "", "", "" );
const demandes: DemandeDeChantierGet[] = [demande];


@Component({
    selector: 'app-list-demande-de-chantier',
    templateUrl: './list-demande-de-chantier.component.html',
    styleUrls: ['./list-demande-de-chantier.component.css']
})
export class ListDemandeDeChantierComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<DemandeDeChantierGet> = new MatTableDataSource<DemandeDeChantierGet>(demandes);

    demandesDeChantier: DemandeDeChantierGet[];

    constructor(
        private demandeDeChantierService: DemandeDeChantierService,
        public affichageUtilsService: AffichageUtilsService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.demandeDeChantierService.getAllDemandeDeChantiers().subscribe(data => {
            this.demandesDeChantier = data;
        })
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
        this.length = demandes.length;
    }

    getAllDemandes() {
        //this.chantierService.getAllChantiers().subcribe((res:any)=>{
        //  this.chantiers = res
        //})


    }

    toDetaileDemande() {
    }
    

}
