import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { appendImage } from "../core/image-save.action";

@Component({
  selector: "app-selectedimage",
  templateUrl: "./selectedimage.component.html",
  styleUrls: ["./selectedimage.component.css"]
})
export class SelectedimageComponent {
  constructor(private store: Store, private router: Router) {}

  capture(ev: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      this.store.dispatch(
        appendImage({ id: Date.now(), image: reader.result as string })
      );
      this.router.navigate(["gallery"]);
    };
    reader.readAsDataURL((ev.target as HTMLInputElement).files[0]);
  }
}
