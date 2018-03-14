import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild("ulEl", {read: ElementRef}) ulEl: ElementRef;
  constructor(private router: Router, private elementRef: ElementRef ) {
  }

/*   goHome(searchEl?) {
    this.router.navigate(['']);
    $(searchEl).css({"color": "darkblue", "font-weight": "bolder"});
  }

  goSearch(searchEl) {
    this.router.navigate(['search']);
    // console.log(searchEl);
    $(searchEl).css({"color": "darkblue", "font-weight": "bolder"});

    // console.log(this.ulEl.nativeElement.innerHTML);
  } */


  // onSearch() {

  //   this.router.navigate(['search', this.term]);
  // }

  ngOnInit() {
  }

}
