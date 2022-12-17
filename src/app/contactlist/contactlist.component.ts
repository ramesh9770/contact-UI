import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  ngOnInit(): void {
    this.getAll();
  }
  contacts:Contact[]=[ ];

  constructor(private contactservice:ContactService,private router:Router){}

  getAll(){
    this.contactservice.getAllContact().subscribe(data=>{
      this.contacts=data;
      console.log("======================")
      console.log(data);
    })
  }
  editContact(id:number){
    console.log("Edited :: "+id);
    this.router.navigate(['/edit',id]); 
  }

  deleteContact(id:number){
    this.contactservice.deleteContactService(id).subscribe(data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.getAll();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      })
  }

}



