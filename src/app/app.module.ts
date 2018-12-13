import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddUserComponent } from "./adduser/adduser.component";
import { HeaderComponent } from "./header/header.component";
import { InfoComponent } from "./info/info.component";
import { RatecostComponent } from "./ratecost/ratecost.component";
import { ReappComponent } from "./resourceapp/resourceapp.component";
import { ResourcemanComponent } from "./resourceman/resourceman.component";
import { ResourceteamComponent } from "./resourceteam/resourceteam.component";
import { SettingsComponent } from "./settings/settings.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatButtonModule,
  MatDatepicker,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { SearchTextPipe } from './search-text.pipe';





@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    InfoComponent,
    RatecostComponent,
    ReappComponent,
    ResourcemanComponent,
    ResourceteamComponent,
    SettingsComponent,
    SearchComponent,
    SearchTextPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    MatTabsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  entryComponents: [AddUserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
