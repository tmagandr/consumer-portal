import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { PageEvent, MatDialogRef, MatSnackBar, MatDialog } from "@angular/material";
import { AddUserComponent } from "../adduser/adduser.component";
@Component({
  selector: "info",
  templateUrl: "./info.component.html",
  styleUrls: ['./info.component.css'],

})
export class InfoComponent implements OnInit {
  totalUsers = 10;
  usersPerPage = 5;
  pageSizeOptions = [1, 2, 5 , 10];
  currentPage = 1;
  @Input() infos = [
    {
      name: "Khang",
      role: "Junior developer",
      team: "Sam",
      app: "EP",
      manager: "Sam Rajan / Thiru",
      location: "St.Louis",
      company: "Ameren"
    },

    {
      name: "Thiru",
      role: " Khang's Mentor / Software Engineer",
      team: "Sam",
      app: "Enterprise",
      manager: "",
      location: "St.Louis",
      company: "Ameren"
    },

    {
      name: "Akshay",
      role: "Software Developer",
      team: "Sam",
      app: "RCP",
      manager: "",
      location: "St.Louis",
      company: "Ameren"
    },

    {
      name: "Sam",
      role: "Project Manager",
      team: "Sam",
      app: "PF",
      manager: "",
      location: "St.Louis",
      company: "Ameren"
    },

    {
      name: "Sri",
      role: "Splunk Engineer",
      team: "Sam",
      app: "PF",
      manager: "",
      location: "St.Louis",
      company: "Ameren"
    }
  ];

  constructor(private _userService: UserService, private matDialog: MatDialog,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchUsers();
    this._userService.getUsers();
    this._userService.addUser$.subscribe(user => this.infos.push(user));
  }
// make sure to add Page Event add by Angular material
  // onChangedPage(pageData: PageEvent){
  //   this.currentPage = pageData.pageIndex + 1;
  //   this.usersPerPage = pageData.pageSize
  //   this._userService.getUsers();
  // }

  private fetchUsers() {
    // we start on page 1 so we put 1 as 2nd argument on getUsers
    this._userService.getUsers().subscribe((data: any) => {
      this.infos = this.infos.concat(data.users);
    });
  }
  searchText = '';
  nameSearch = '';
  roleSearch = '';
  teamSearch = '';
  appSearch = '';
  managerSearch = '';
  locationSearch = '';
  companySearch ='';

  onUserAdded(user) {
    this.infos.push(user);
  }

  openAddUseDialog() {
    const ref = this.matDialog.open(AddUserComponent, {
      width: "700px",
      height: "500px",
      maxHeight: "500px"
    });


  }
}
