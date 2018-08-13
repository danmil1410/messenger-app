import {Component, DoCheck, OnInit} from "@angular/core";
import {User} from "../../core/user.model";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {OptionsLogoutComponent} from "./options-logout/options-logout.component";
import {OptionsUsernameComponent} from "./options-username/options-username.component";
import {OptionsImageComponent} from "./options-image/options-image.component";
import {ImageService} from "../../core/image.service";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: "app-menu-options",
  templateUrl: "./menu-options.component.html",
  styleUrls: ["./menu-options.component.css"],
  animations: [
    trigger("optionsState", [
      state("inactive", style({
        display: "none",
        transform: "translateX(220px)"
      })),
      state("active", style({
        display: "block",
        transform: "translateX(0)"
      })),
      transition("inactive => active", animate("300ms cubic-bezier(.69,.11,.7,1)")),
      transition("active => inactive", animate("300ms cubic-bezier(.69,.11,.7,1)"))
    ])
  ]
})
export class MenuOptionsComponent implements OnInit, DoCheck {
  activeUser: User;
  state = "inactive";

  constructor(private authService: AuthService,
              private router: Router,
              private dialog: MatDialog,
              private imageService: ImageService) {
  }

  ngOnInit() {
    this.activeUser = this.authService.getLoggedUser();
  }

  ngDoCheck() {
    if (this.imageService.getImage()) {
      this.activeUser.imagePath = this.imageService.getImage();
      this.imageService.setImage(null);
    }
  }

  toggleState() {
    this.state = this.state === "active" ? "inactive" : "active";
  }

  openUserNameDialog() {
    const userDialogRef = this.dialog.open(OptionsUsernameComponent, {
      height: "285px",
      width: "450px"
    });

    userDialogRef.afterClosed().subscribe(result => {
      this.authService.setLoggedUser(result.firstName.value, result.lastName.value);
    });
  }

  openUserLogoutDialog() {
    this.dialog.open(OptionsLogoutComponent, {
      height: "150px",
      width: "250px"
    });
  }

  openUserImageDialog() {
    this.dialog.open(OptionsImageComponent, {
      height: "150px",
      width: "300px"
    });
  }

}
