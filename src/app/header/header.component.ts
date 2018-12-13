import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddUserComponent } from "../adduser/adduser.component";
import { MatSnackBar } from "@angular/material";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  logo: string;
  icon: string;
  constructor(private matDialog: MatDialog, private snackBar: MatSnackBar) {
    this.logo = '../../assets/Ameren_FEFL_Logo.jpg'
    this.icon = '../../assets/icon.png'
  }

  openAddUseDialog() {
    const ref = this.matDialog.open(AddUserComponent, {
      width: "700px",
      height: "500px",
      maxHeight: "500px"
    });
    // ref.afterClosed().subscribe(data => {
    //   console.log("Added successfully", data);
    //   this.snackBar.open(`${data.name} has been added successfuly` ,'close', {
    //     duration: 2000,
    //   })

    // });
  }
}
