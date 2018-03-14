import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private loginService: SearchService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let loggedIn = this.loginService.isLoggedIn();
    console.log("OnlyLoggedInUsersGuard called..");
    //  this is the future route that will be activated if the guard passes, we can use it’s params property to extract the route params.
    // console.log("ActivatedRouteSnapshot", next );

    // this is the future RouterState if the guard passes, we can find the URL we are trying to navigate to from the url property.
    // console.log("RouterStateSnapshot", state );
    if (!loggedIn) {
      alert("You are not authorized to viist this page.. Login Required");
      // re-direct user to login page
      // this.router.navigate(['login']);
    } else {
      // let user procced to visit the componen/page on which is guard is applied.
      console.log("You are authorized to visit this page.. Welcome.. :)");
    }
    return loggedIn;
  }
}
