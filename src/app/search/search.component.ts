import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.searchUserForm.valueChanges.subscribe(value => console.log({value}))
  }

private initForm(){
  this.searchUserForm = this.formBuilder.group({
    domainId: [""],
    firstName: [""],
    lastName: [''],
    managers: [''],
    companies: [''],
    teams: [''],
    city: [''],
    location: [''],
    roles: [''],
    skills: [''],
    application: [''],
    workLocation: [''],
  })
}

onResetForm(){
  this.searchUserForm.reset();
}
}
