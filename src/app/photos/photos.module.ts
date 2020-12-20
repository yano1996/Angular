import {NgModule} from "@angular/core";
import {PhotosComponent} from "./photo/photo.component";

@NgModule({
  declarations: [PhotosComponent],
  exports: [ PhotosComponent ]
})

export class PhotosModule {}
