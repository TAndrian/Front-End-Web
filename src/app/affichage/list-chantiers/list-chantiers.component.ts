import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ChantierService} from '../../core/services/chantier.service';
import {StatusType} from '../../shared/model/statusType';
import {ChantierGet} from '../../shared/model/chantierGet';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const client: Client = new Client("Rennes", "Jean", "Pierre", "AAAAAA", "");
const site: Site = new Site("Rennes", "Jean", "Pierre", "AAAAAA", "", "");
const ouvriers: Set<string> = new Set<string>();
const chan1: ChantierGet = new ChantierGet(1, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chan2: ChantierGet = new ChantierGet(2, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chan3: ChantierGet = new ChantierGet(3, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chan4: ChantierGet = new ChantierGet(4, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chan5: ChantierGet = new ChantierGet(5, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chan6: ChantierGet = new ChantierGet(6, site, client, null, null, "AAA", ouvriers, "", null, null, 2, "", StatusType.DEMARRE, "", "", "", null, null, false);
const chantiers: ChantierGet[] = [chan1, chan2, chan3, chan4, chan5, chan6];

@Component({
    selector: 'app-list-chantiers',
    templateUrl: './list-chantiers.component.html',
    styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    //chantiers: ChantierGet[]
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<ChantierGet> = new MatTableDataSource<ChantierGet>();

    constructor(private chantierService: ChantierService, private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.chantierService.getAllChantiers().subscribe(data => {
            this.changeDetectorRef.detectChanges();
            this.dataSource.data = data;
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.length = data.length;
        });

    }


}
