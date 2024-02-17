import { Component, ElementRef, OnInit } from '@angular/core';
import {
  NavigationEnd,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from './layouts/header/header.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { routerAnimation } from './shared/animation/routerAnimation';
import { FooterComponent } from './layouts/footer/footer.component';
import { provideIcons } from '@ng-icons/core';
import {
  heroArrowLongRight,
  heroShoppingBag,
  heroPencilSquare,
  heroHeart,
} from '@ng-icons/heroicons/outline';
import {heroHeartSolid} from '@ng-icons/heroicons/solid';
import {
  featherEdit2,
  featherFacebook,
  featherInstagram,
  featherSearch,
} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent],
  animations: [routerAnimation()],
  viewProviders: [
    provideIcons({
      heroShoppingBag,
      heroArrowLongRight,
      heroPencilSquare,
      featherSearch,
      featherInstagram,
      featherFacebook,
      featherEdit2,
      heroHeart,
      heroHeartSolid
    }),
  ],
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
  loader = false;
  constructor(
    private toaster: ToastrService,
    private router: Router,
    private el: ElementRef
  ) {
    setTheme('bs5');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isDisplay =
          this.router.url !== '/login' && this.router.url !== '/otp';
      });
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loader = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loader = false;
      }
    });
  }

  ngOnInit() {
    this.toaster.success('Welcome to MMJ');
  }
}
