import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Entry } from "../core/entry";
import { Observable } from "rxjs";
import { appendImage, removeImage } from "../core/image-save.action";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent {
  @ViewChildren("result") resultCanvases: QueryList<ElementRef>;
  readonly images$: Observable<Entry[]>;

  constructor(
    private store: Store<{ imageSave: Entry[] }>,
    private router: Router
  ) {
    this.images$ = store.select("imageSave");
  }

  capture(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      this.store.dispatch(
        appendImage({ id: Date.now(), image: reader.result as string })
      );
    };
    reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
  }

  onDelete(id: number) {
    this.store.dispatch(removeImage({ id: id }));
  }

  onSend() {
    this.router.navigate(["success"]);
  }
}
