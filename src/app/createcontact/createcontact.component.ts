import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from "../contact.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  ngOnInit(): void { }
  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) { }

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }

  saveContact() {
      this.contactService.createContact(this.contact).subscribe(
      data => {
      console.log(data),
      this.reDirectToList();
    },
      error => {
        console.log("FAILED........");
        console.log(error);
      });

  }

  reDirectToList() {
    this.router.navigate(['/contacts']);
  }


}
