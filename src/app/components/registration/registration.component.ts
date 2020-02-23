import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/Register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: Registration;
  nationalities = [
    { name: "Singaporean", code: "SG"},
    { name: "Indonesian", code: "IN"},
    { name: "Indian", code: "ID"},
    { name: "China Chinese", code: "CN"},
  ]


  constructor() {
    this.model = new Registration('','','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit!");
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.model.address);
    console.log(this.model.country);
    console.log(this.model.contactNo);
    console.log(this.model.gender)
  }

  resetForm(){
    this.model = new Registration('','','','','','','','');
  }

}
