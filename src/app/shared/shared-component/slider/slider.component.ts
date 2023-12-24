import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NgxSplideModule, NgIcon],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() product!: any;
}
