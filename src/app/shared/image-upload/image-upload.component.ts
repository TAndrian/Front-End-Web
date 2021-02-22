import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output , EventEmitter } from '@angular/core';

import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  @Output() imageIdEvent = new EventEmitter<string>();

  imageId: string;

  selectedFiles: FileList;
  currentFile: File;
  message = '';

  fileChange(input) : void{
    this.imageService.addImage(input).subscribe();
  }

  upload() : void{
    this.currentFile = this.selectedFiles.item(0);
    this.imageService.addImage(this.currentFile).subscribe((data: HttpResponse<any>) => {

      this.imageId = data.headers.get('location').split('/')[2];
      this.imageIdEvent.emit(this.imageId);
    
    });
    
    this.selectedFiles = undefined;
  }

  selectFile(event): void{
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void{}

}
