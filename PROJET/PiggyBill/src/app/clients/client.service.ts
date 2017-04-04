import {Injectable} from '@angular/core';
import {Client} from "./client";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClientService {

  private clients: Client[] = [
    new Client('Client1', 'Nom1', 'client1.nom1@test.fr'),
    new Client('Client2', 'Nom2', 'client2.nom2@test.fr', 'Société1'),
    new Client('Client3', 'Nom3', 'client3.nom3@test.fr', 'Société1'),
  ];

  constructor(private http: Http) {
  }

  getClients() {
    return this.clients
  }

  addClient(client: Client) {
    this.clients.push(client);

    this.storeClients(this.clients).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  deleteClient (client: Client){
    this.clients.splice(this.clients.indexOf(client), 1)
  }

  getClient(clientId: number) {
    return this.clients[clientId];
  }

  editClient(newClient: Client, oldClient: Client) {
    this.clients[this.clients.indexOf(oldClient)] = newClient;
  }

  storeClients(clients: Client[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://piggy-bill.firebaseio.com/data.json',
      clients,
      {headers: headers}
    );

  }

  downloadClients(){
    return this.http.get('https://piggy-bill.firebaseio.com/data.json').map(
      (response: Response) => {
        console.log(response.json());
        return response.json()
      }
    )
  }
}
