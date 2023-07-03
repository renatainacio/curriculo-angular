import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { contactData } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  @Output() public sendContact = new EventEmitter<contactData>(); 

  public contact!:contactData;

  ngOnInit(): void {
    this.contact = {
      email: "",
      subject: "",
      message: ""
    }
  }

  public submitForm(): void{
    if(this.contact.email && this.contact.message && this.contact.subject) {
      this.sendContact.emit(this.contact)
      alert("Thanks for reaching out! I'll get back to you soon.")
    }
  }

  public isFormValid(): boolean {
    return !!this.contact.email && !!this.contact.message && !!this.contact.subject;
  }
}
