import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  // imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],

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
  isFirstOpen = true;
}
