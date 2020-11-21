import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HomeModel} from '../models/homeModel';
import {Observable} from 'rxjs';
import {HomeService} from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<HomeModel[]> {

  constructor(private homeService: HomeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeModel[]> {
    return this.homeService.getHomeImages();
  }

}

