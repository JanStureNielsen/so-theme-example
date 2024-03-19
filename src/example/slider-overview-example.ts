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
  useOtherColor: boolean = true;

  private themeNames: string[] = ['theme-1', 'theme-2', 'theme-3'];
  private themeIndex: number = 0;

  useOtherTheme: string = this.themeNames[this.themeIndex];

  theme() {
    this.themeIndex++;

    if (this.themeIndex == this.themeNames.length) {
      this.themeIndex = 0;
    }

    return this.themeNames[this.themeIndex];
  }

}
