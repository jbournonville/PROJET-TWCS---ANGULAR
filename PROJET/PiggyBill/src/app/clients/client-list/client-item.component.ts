import {Component, OnInit, Input} from '@angular/core';
import {Client} from "../client";
import {ClientService} from "../client.service";
import {Router} from "@angular/router";

@Component({
  selector: '[client-item]',
  template: `
    <td>{{client.firstName}} {{client.lastName}}</td>
    <td>{{client.mail}}</td>
    <td>{{client.company}}</td>
    <td>
      <button type="button" class="btn btn-primary btn-sm" (click)="onEdit()"><i class="fa fa-pencil" aria-hidden="true"></i></button>
      <button type="button" class="btn btn-warning btn-sm" (click)="onDelete()"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>
  `
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;
  @Input() clientId: number;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  onEdit(){
    this.router.navigate(['/clients', this.clientId, 'edit']);
  }

  onDelete(){
    this.clientService.deleteClient(this.client);
  }

}
