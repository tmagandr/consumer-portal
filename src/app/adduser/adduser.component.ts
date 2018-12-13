import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { UserService } from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { teamOptions, appOptions, managerOptions, locationOptions, companyOptions } from '../constants';
import { User } from "../user.model";

@Component({
  selector: "adduser",
  templateUrl: "./adduser.component.html"
})
export class AddUserComponent implements OnInit {
  enteredFirstName = "";
  enteredLastName = "";
  enteredRole = "";
  showAdduser: boolean = true;
  @Output() userCreated = new EventEmitter();

  addUserForm: FormGroup;

  teamFormOptions = teamOptions;
  appFormOptions = appOptions;
  managerFormOptions = managerOptions;
  locationFormOptions = locationOptions;
  companyFormOptions = companyOptions;

  resourceManagerOptions = [
    {label: "Yes", value: 'yes'}
  ]

  constructor(
    private matDialogRef: MatDialogRef<AddUserComponent>,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log("In the add user component");
    this.initForm();

    this.addUserForm.valueChanges.subscribe(value => console.log({value}));
  }

  private initForm() {
    this.addUserForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      role: ["", Validators.required],
      team: ["sam",Validators.required],
      app:["enterprise", Validators.required],
      manager: ["sam", Validators.required],
      location: ["onshore", Validators.required],
      company:['ameren', Validators.required]
    }); // new FormGroup()
  }

  onCreateUser() {
    const {firstName, lastName, ...rest} = this.addUserForm.value;

    const user: User = {
      name: `${firstName} ${lastName}`,
      ...rest
    }

    console.log({formValue: this.addUserForm.value, user});
    // this.showAdduser == false;
    // const user = {
    //   name: "john doe",
    //   role: "admin",
    //   team: "team",
    //   app: "app",
    //   manager: "manager",
    //   location: "location",
    //   company: "company"
    // };
    // this.userCreated.emit(user);
    this.userService.addUser(user).subscribe(
      data => {
        console.log({ data });
        this.matDialogRef.close(data);
      },
      err => console.log(err)
    );
  }
}
