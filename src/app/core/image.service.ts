import { Injectable } from "@angular/core";
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  private image: any;

  constructor( private snackBar: MatSnackBar) { }

  getImage() {
    return this.image;
  }

  setImage(image: any) {
    this.image = image;
  }

  onAddFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size < 2000000) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = <File> (eventData) => {
          this.setImage(eventData.target.result);
          this.snackBar.open("Your image has been set!", "Dismiss", {
            duration: 3000,
          });
        };
      } else {
        this.snackBar.open("The size of image is too big (more than 2MB)!", "Dismiss", {
          duration: 3000,
        });
      }
    }
  }

}
