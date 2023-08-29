import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit{
  title = 'mmj_store';
  constructor(private toaster: ToastrService) {
        setTheme('bs5');
  }
  ngOnInit() {
    this.toaster.success("Welcome to MMJ")

  }
}
