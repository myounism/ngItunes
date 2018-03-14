import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {SearchComponent} from '../search/search.component';


@Injectable()
export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {

  canDeactivate(
    component: SearchComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log("UnsearchedTermGuard called..");
    console.log("state", state);
    console.log("next", next);

    // if (next.params) {
    //   return true;
    // } else {
    //   // alert("u cant leave this page.. my marzi");
    //   return component.canDeactivate() || window.confirm("Are you sure?");
    // }

    return component.canDeactivate() || window.confirm("Are you sure?");

  }
}
