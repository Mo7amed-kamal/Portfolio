import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    contactForm: FormGroup = this._FormBuilder.group({
      from_name: '',
      to_name: "admin",
      from_email: '',
      subject: '',
      message: ''
    })

    constructor(private _FormBuilder:FormBuilder){}


    async send(){
      emailjs.init('UdLeyR9wahmlFlgwe')
      let response = await emailjs.send("service_2chc3xs","template_xgu72r6",{
        from_name: this.contactForm.value.from_name,
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        });

        Swal.fire({
          title: "Good job!",
          text: "Message has been send done",
          icon: "success"
        });
        this.contactForm.reset()
    }


}
