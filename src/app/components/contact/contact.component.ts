import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlState,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    this.contact = this.contactForm.value;
  }

}
