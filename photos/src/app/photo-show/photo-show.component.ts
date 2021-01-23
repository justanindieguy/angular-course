import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl = '';

  constructor(private photosService: PhotosService) {
    this.fetchImage();
  }

  onClick() {
    this.fetchImage();
  }

  private fetchImage() {
    this.photosService
      .getPhoto()
      .subscribe((response) => (this.photoUrl = response.urls.regular));
  }

  ngOnInit() {}
}
