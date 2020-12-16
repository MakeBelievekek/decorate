import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { BreadcrumbModel } from '../../models/breadcrumbModel';
import { BreadCrumbService } from '../../services/breadCrumb.service';
import { LoadingService } from '../../services/loading.service';

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

    constructor(private router: Router,
                private breadcrumbService: BreadCrumbService,
                private loadingService: LoadingService) {
        this.initial();
        this.buildBreadCrumb(this.router, this.path, this.stations, this.breadcrumbs);
    }

    ngOnInit(): void {
        this.router.events.pipe(filter((event: RouterEvent) => this.loadingService.isNavigationEnd(event)),
            distinctUntilChanged()).subscribe(() => {
            console.log('navigálok');
            this.initial();
            this.buildBreadCrumb(this.router, this.path, this.stations, this.breadcrumbs);
            console.log(this.breadcrumbs);
        });
    }
    initial() {
        this.breadcrumbs = [];
        this.path = this.router.url;
        this.stations = this.path.split('/');
        this.stations.shift();
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
    private isNavigationEnd(event: RouterEvent): boolean {
        return event instanceof NavigationEnd;
    }

    cons(url: string) {
        console.log(url);
    }

}
