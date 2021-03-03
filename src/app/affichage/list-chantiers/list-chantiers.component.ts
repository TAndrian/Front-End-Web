import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ChantierService} from '../../core/services/chantier.service';
import {StatusType} from '../../shared/model/statusType';
import {ChantierGet} from '../../shared/model/chantierGet';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-list-chantiers',
    templateUrl: './list-chantiers.component.html',
    styleUrls: ['./list-chantiers.component.css']
})
export class ListChantiersComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<ChantierGet> = new MatTableDataSource<ChantierGet>();

    constructor(private route: ActivatedRoute, 
                private chantierService: ChantierService, 
                private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.creatTableSource();
        this.route.params.subscribe( () => this.creatTableSource());
    }

    creatTableSource(): void {
        this.chantierService.getAllChantiers().subscribe(data => {
            this.changeDetectorRef.detectChanges();
            this.dataSource.data = data.reverse();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.length = data.length;
        });
    }

    toDeleteChantier(id: number): void {
        this.chantierService.deleteChantierById(id.toString()).subscribe(data => 
        {console.log("delete");
        //this.dataSource.data.splice(data,1);
        window.location.reload();
        this.dataSource.paginator = this.paginator;
        });
    }


}
