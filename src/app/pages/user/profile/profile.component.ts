import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AccordionModule, TabsModule],
  // imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],

  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  itemStringsLeft = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
}
