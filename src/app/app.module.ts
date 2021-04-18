import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SelectedimageComponent } from "./selectedimage/selectedimage.component";
import { AppRoutingModule } from "./app.routing.module";
import { GalleryComponent } from "./gallery/gallery.component";
import { SuccessComponent } from "./success/success.component";

import { imageSaveReducer } from "./core/image-save.reducer";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ imageSave: imageSaveReducer })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SelectedimageComponent,
    GalleryComponent,
    SuccessComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
