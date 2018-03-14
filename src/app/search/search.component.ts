import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import {SearchService} from '../services/search.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  records: any = [];
  recordsCount: number;
  loading: boolean = false;
  currentTerm: string;

  constructor(public itunes: SearchService, private route: ActivatedRoute, private router: Router) {
    this.recordsCount = undefined;
    this.route.params.subscribe(params => {
      // console.log("currentTerm.......", this.currentTerm);
      console.log("params", params);
      if (params['term']) { // params.term
        this.currentTerm = params.term;   // as to retain value inside text input box after refreshing page..
        this.populateRecords(params['term']);
      }
    });
  }

  ngOnInit() {
    // console.log("called.......", this.currentTerm);
    if (this.itunes.getResultCount("records") > 0) {
      this.records = this.itunes.getPreviousSearchRecords();
      this.recordsCount = this.records.length;
    }
  }

  // doSearch(term: string) {
  //   this.loading = true;
  //   this.itunes.search(term).then(_ => this.loading = false);
  // }

  onSearch(term: string) {
    // this.router.navigate(['search', {term: term}]);
    // or
    this.router.navigate(['search', term]);
  }

  canDeactivate() {
    console.log("recordsCount = ", this.itunes.getResultCount("records") );
    return this.itunes.getResultCount("records") > 0;
  }

  populateRecords(term: string) {
    this.records = [];
    this.loading = true;
    // as to hide it while displaying "loading..." on screen
    this.recordsCount = undefined;
    this.itunes.search(term).then( res => {
      this.records = res;
      this.recordsCount = this.itunes.getResultCount("records");
      console.log("Total Records", this.recordsCount);
      this.loading = false;
      console.log(this.records);
    });

  }


  ngOnDestroy() {
    console.log("on destroy called");
  }


  hasPreviousData() {
    return this.itunes.getResultCount("records") > 0;
  }
  getPreviousData() {
    console.log("records i already have", this.records);
    if (this.itunes.getResultCount("records") > 0) {
      this.records = this.itunes.getPreviousSearchRecords();
      // console.log("got records", this.records);
      // this.itunes.getPreviousSearchRecords();
    }
    console.log("records i got", this.records);

  }

}
