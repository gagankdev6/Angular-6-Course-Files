import { Component, OnInit } from '@angular/core';
import { GRAPHICS } from '../../constants/static-data.constants';

@Component({
  selector: 'app-all-graphics',
  templateUrl: './all-graphics.component.html',
  styleUrls: ['./all-graphics.component.css']
})
export class AllGraphicsComponent implements OnInit {
  graphics = GRAPHICS;
  constructor() { }

  ngOnInit() {
  }

}
