import { Injectable } from '@angular/core';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterEvent,
} from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {

    constructor(private router: Router) {

    }

    isNavigationPending$: Observable<boolean> = this.router.events.pipe(
        filter((event: RouterEvent) => this.isConsideredEvent(event)),
        map((event: RouterEvent) => this.isNavigationStart(event)),
        distinctUntilChanged(),
    );

     isConsideredEvent(event: RouterEvent): boolean {
        return this.isNavigationStart(event)
            || this.isNavigationEnd(event);
    }

    isNavigationStart(event: RouterEvent): boolean {
        return event instanceof NavigationStart;
    }

     isNavigationEnd(event: RouterEvent): boolean {
        return event instanceof NavigationEnd
            || event instanceof NavigationCancel
            || event instanceof NavigationError;
    }

}
