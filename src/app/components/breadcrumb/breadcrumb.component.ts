import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbModel } from '../../models/breadcrumbModel';
import { BreadCrumbService } from '../../services/breadCrumb.service';

const constPath = '/termekkategoriak';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {

    breadcrumbs: BreadcrumbModel[] = [];
    path: string = '';
    stations: string[] = [];
    isHovered: boolean = false;

    constructor(private router: Router,
                private breadcrumbService: BreadCrumbService,
                private activatedRoute: ActivatedRoute) {
        //  this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        this.path = router.url;
        this.stations = this.path.split('/');
        this.stations.shift();
    }

    ngOnInit(): void {
        /*    this.router.events.pipe(filter((event: RouterEvent) => this.isNavigationEnd(event)),
                distinctUntilChanged()).subscribe(() => {
                this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
            });
    */
        this.buildBreadCrumb(this.router, this.path, this.stations, this.breadcrumbs);
        console.log(this.breadcrumbs)
    }

    buildBreadCrumb(router: Router, path: string, stations: string[], breadcrumb: BreadcrumbModel[] = []) {
        for (let i = 0; i < stations.length; i++) {
            let bread: BreadcrumbModel = new class implements BreadcrumbModel {
                label: string;
                url: string;
            };
            if (i === 0) {
                bread.url = '/' + stations[i];
                bread.label = this.breadcrumbService.getBread(stations[i]);
                breadcrumb.push(bread);
            } else {
                bread.url = '';
                for (let j = 0; j <= i; j++) {
                    bread.url += '/' + stations[j];
                    if (j === i) {
                        bread.label = this.breadcrumbService.getBread(stations[j]);
                    }
                }
                breadcrumb.push(bread);
            }
        }
    }

    /*  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {

          let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
          let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

          const lastRoutePart = path.split('/').pop();
          const isDynamicRoute = lastRoutePart.startsWith(':');
          if (isDynamicRoute && !!route.snapshot) {
              const paramName = lastRoutePart.split(':')[1];
              path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
              label = route.snapshot.params[paramName];
          }

          const nextUrl = path ? `${url}/${path}` : url;

          const breadcrumb: BreadcrumbModel = {
              label: label,
              url: constPath + nextUrl,
          };
          const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
          if (route.firstChild) {
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
          }

          return newBreadcrumbs;
      }

      private isNavigationEnd(event: RouterEvent): boolean {
          return event instanceof NavigationEnd;
      }

      cons(url: string) {
          console.log(url);
      }*/
    select() {
        this.isHovered = true;
    }
}
