import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../core/services/client.service';
import {Client} from '../../shared/model/client';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  @Input() client: Client;
  constructor(
      private route: ActivatedRoute,
      private clientService: ClientService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && this.client == null){
      this.clientService.getClientById(id).subscribe(
          (res: Client) => this.client = res
      );
    }
  }

}
