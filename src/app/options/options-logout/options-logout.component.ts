import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-options-logout",
  templateUrl: "./options-logout.component.html",
  styleUrls: ["./options-logout.component.css"]
})
export class OptionsLogoutComponent {

  constructor(public dialogRef: MatDialogRef<OptionsLogoutComponent>, private authService: AuthService, private router: Router) { }

  onLogout() {
    this.dialogRef.close();
    this.router.navigate(["/"]);
    this.authService.onUserLogout();
  }

}
