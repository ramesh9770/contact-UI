import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
private baseUrl='http://localhost:8080';

  constructor(private httpClient:HttpClient) {
   }


  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`,contact,{responseType:"text"});
  }
  getAllContact():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/list`);
  }

  findContact(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }

  deleteContactService(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`,{responseType:"text"})
  }


}
