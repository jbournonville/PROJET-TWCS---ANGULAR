import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Client} from "../client";
import {FormGroup, FormControl, Validator, Validators, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  providers: [ClientService]
})
export class ClientEditComponent implements OnInit {
  private subscription: Subscription;
  private clientId: number;
  private client: Client;
  private isNew: boolean = true;
  private clientForm: FormGroup;
  private clientEditModeLabel: string;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.clientEditModeLabel = "Edition client";
          this.clientId = +params['id'];
          this.client = this.clientService.getClient(this.clientId);
        } else {
          this.isNew = true;
          this.clientEditModeLabel = "Ajout client";
          this.client = null;
        }
        this.initForm();
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit() {
    if (this.isNew) {
      // Add mode
      this.clientService.addClient(this.clientForm.value);
      this.clearForm();
    } else {
      // Edit mode
      this.clientService.editClient(this.clientForm.value, this.client);
    }
  }

  clearForm() {
    this.clientForm.reset();
  }

  onCancel() {
    this.router.navigate(['clients']);
  }

  private initForm() {
    let clientFirstName = '';
    let clientLastName = '';
    let clientMail = '';
    let clientCompany = '';

    if (!this.isNew) {
      clientFirstName = this.client.firstName;
      clientLastName = this.client.lastName;
      clientMail = this.client.mail;
      clientCompany = this.client.company;
    }

    this.clientForm = this.formBuilder.group(
      {
        firstName: [clientFirstName, Validators.required],
        lastName: [clientLastName, Validators.required],
        mail: [clientMail, Validators.required],
        company: [clientCompany]
      }
    );
  }
}
