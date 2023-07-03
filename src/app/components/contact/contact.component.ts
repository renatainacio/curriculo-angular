import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { contactData } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public contact?: contactData;
  public contactForm!: FormGroup;


  public buildForm(): void{
    this.contactForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      subject: new FormControl(null, [
        Validators.required,
      ]),
      message: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }


  public onSubmit(): void {
    alert("Thank you for reaching out! I`ll get back to you as soon as I can.")
    this.contact = this.contactForm.value;
    console.log(this.contact);
  }

}
