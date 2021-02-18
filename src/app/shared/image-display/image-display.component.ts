import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input() imageId:number;
  @Input() alt:string;

  imageUrl="";
  altImage="L'image demandé n'as pas chargé, où n'existe pas dans la base de données";

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    if(this.alt!==undefined){
      this.altImage=this.alt;
    }
    if(this.imageId === undefined) {
      throw new Error("L'id de l'image est requis !");
    }else{
      this.imageService.getImage(this.imageId).subscribe(data => {
        this.imageUrl="data:image/png;base64,"+data.body.image.data;
      })
    }
  }

}
