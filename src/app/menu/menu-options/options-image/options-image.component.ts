import {Component} from "@angular/core";
import {ImageService} from "../../../core/image.service";

@Component({
  selector: "app-options-image",
  templateUrl: "./options-image.component.html",
  styleUrls: ["./options-image.component.css"]
})
export class OptionsImageComponent {

  constructor(private imageService: ImageService) { }

  onAddFile(event: any) {
    this.imageService.onAddFile(event);
  }

}
