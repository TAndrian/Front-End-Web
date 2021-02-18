import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {SiteService} from '../../core/services/site.service';
import {Site} from '../../shared/model/site';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const site: Site = new Site("Rennes", "Jean", "Pierre", "AAAAAA", "", "");
const sites: Site[] = [site];

@Component({
    selector: 'app-list-sites',
    templateUrl: './list-sites.component.html',
    styleUrls: ['./list-sites.component.css'],

})
export class ListSitesComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    length: number;
    obs: Observable<any[]>;
    dataSource: MatTableDataSource<Site> = new MatTableDataSource<Site>();

    sites: Site[];

    constructor(
        private siteService: SiteService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.siteService.getAllSites().subscribe(data => {
            this.changeDetectorRef.detectChanges();
            this.dataSource.data = data;
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
            this.length = data.length;
        })
    }

}
