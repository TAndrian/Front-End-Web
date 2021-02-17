import {Component, OnInit} from '@angular/core';
import {SiteService} from '../../core/services/site.service';
import {Site} from '../../shared/model/site';

@Component({
    selector: 'app-list-sites',
    templateUrl: './list-sites.component.html',
    styleUrls: ['./list-sites.component.css'],

})
export class ListSitesComponent implements OnInit {
    sites: Site[];

    constructor(
        private siteService: SiteService
    ) {
    }



    ngOnInit(): void {
        this.siteService.getAllSites().subscribe(data => {
            this.sites = data;
        })
    }

}
