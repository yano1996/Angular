import { HttpClient, HttpClientModule } from "@angular/common/http";
import {NgModule} from "@angular/core";
import {PhotosComponent} from "./photo/photo.component";

@NgModule({
  declarations: [PhotosComponent],
  exports: [ PhotosComponent ],
  imports: [HttpClientModule]
})

export class PhotosModule {}
