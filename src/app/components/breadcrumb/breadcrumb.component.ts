import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { BreadcrumbModel } from '../../models/breadcrumbModel';

const constPath = 'home/termekkategoriak';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {

    breadcrumbs: BreadcrumbModel[] = [];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    }

    ngOnInit(): void {

        this.router.events.pipe(filter((event: RouterEvent) => this.isNavigationEnd(event)),
            distinctUntilChanged()).subscribe(() => {
            this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        });

    }
    buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {

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
    }
}
