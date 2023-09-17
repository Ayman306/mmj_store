import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, TabsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  section = 'personal';
  sectionSelect(section = 'personal') {
    this.section = section;
  }
}
