import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from './layouts/header/header.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { routerAnimation } from './shared/animation/routerAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  animations: [routerAnimation()],
})
export class AppComponent implements OnInit {
  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData['num'] === undefined
        ? -1
        : outlet.activatedRouteData['num'];

    return res;
  }
  title = 'mmj_store';
  isDisplay = true;

  constructor(private toaster: ToastrService, private router: Router) {
    setTheme('bs5');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isDisplay =
          this.router.url !== '/login' && this.router.url !== '/otp';
      });
  }

  ngOnInit() {
    this.toaster.success('Welcome to MMJ');
  }
}
