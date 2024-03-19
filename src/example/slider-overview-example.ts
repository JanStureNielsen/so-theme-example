import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrl: 'slider-overview-example.scss',
  standalone: true,
  imports: [MatSliderModule, CommonModule],
})
export class SliderOverviewExample {
  useOtherTheme: boolean = true;
  useOtherColor: boolean = true;

}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */