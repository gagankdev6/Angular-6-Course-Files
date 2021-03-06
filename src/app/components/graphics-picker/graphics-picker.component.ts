import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shirt, Colour, Graphic } from '../../shared/shirt';
import { Subscription } from 'rxjs';
import { ShirtService } from '../../core/shirt.service';
import { GRAPHICS } from '../../constants/static-data.constants';

@Component({
  selector: 'app-graphics-picker',
  templateUrl: './graphics-picker.component.html',
  styleUrls: ['./graphics-picker.component.css']
})
export class GraphicsPickerComponent implements OnInit {

  graphics = GRAPHICS;
  @Output() changeGraphic: EventEmitter<Graphic>;
  @Output() changeGraphicColour: EventEmitter<Colour>;

  editableShirt: Shirt;
  sub: Subscription;
  graphicColourTitle: string = 'Change graphic colour';

  constructor(private shirtService: ShirtService) {
    this.changeGraphic = new EventEmitter<Graphic>();
    this.changeGraphicColour = new EventEmitter<Colour>();
   }

  ngOnInit() {
    this.sub = this.shirtService.getEditableShirt().subscribe((shirt) => {
      this.editableShirt = shirt;
    });
  }

  pickGraphic(graphic): void {
    const newGraphic = { name: graphic.name, fileName: graphic.fileName };
    //this.shirtService.updateShirtGraphic(newGraphic);
    this.changeGraphic.emit(newGraphic);
    // Object.assign(this.editableShirt.graphic, graphic);
  }

  getGraphicImagePath(graphic): string {
    const path = this.shirtService.getGraphicImagePath(graphic);
    return path;
  }

  changeColour(colour: Colour): void {
    //this.shirtService.selectGraphicColour(colour);
    this.changeGraphicColour.emit(colour);
  }

}
