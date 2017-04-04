import {Component, OnInit} from '@angular/core';
import {Client} from "../client";
import {ClientService} from "../client.service";

@Component({
  selector: 'app-client-list',
  template:`
    <h3>Liste des clients</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Adresse mail</th>
          <th>Société</th>
          <th><button type="button" class="btn btn-info btn-sm" [routerLink]="['new']">Ajouter <i class="fa fa-plus" aria-hidden="true"></i></button></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let client of clients; let i = index" client-item  [client]="client" [clientId]="i"></tr>
      </tbody>
    </table>
  `
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clients = this.clientService.getClients()
  }

}
