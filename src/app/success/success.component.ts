import { LocationStrategy } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";

import { clearImages } from "../core/image-save.action";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.css"]
})
export class SuccessComponent implements OnDestroy {
  constructor(
    private locationStrategy: LocationStrategy,
    private store: Store
  ) {
    this.locationStrategy.pushState(null, "", "success", "");
    locationStrategy.onPopState(() => {
      this.locationStrategy.pushState(null, "", "success", "");
      return false;
    });
  }
  ngOnDestroy(): void {
    this.store.dispatch(clearImages());
  }
}
