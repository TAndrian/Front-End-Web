import {Component, Input, OnInit} from '@angular/core';
import {Site} from '../../shared/model/site';
import {Client} from '../../shared/model/client';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../core/services/client.service';
import {SiteService} from '../../core/services/site.service';

@Component({
  selector: 'app-detail-site',
  templateUrl: './detail-site.component.html',
  styleUrls: ['./detail-site.component.css']
})
export class DetailSiteComponent implements OnInit {
  @Input() site: Site;
  constructor(
      private route: ActivatedRoute,
      private siteService: SiteService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && this.site == null){
      this.siteService.getSiteById(id).subscribe(
          (res: Site) => this.site = res
      );
    }
  }

}
