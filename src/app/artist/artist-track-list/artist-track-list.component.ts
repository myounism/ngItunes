import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  tracks: any[];
  loading = false;
  tracksCount: number;
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
    // this.activatedRoute.params.subscribe(params => console.log(params)); // Object {}
    // The reason for this is that ActivatedRoute only passes you the parameters for the current components route and
    // since the route for ArtistTrackListComponent doesn’t have any route parameters it gets passed nothing,
    // we want to get the params for the parent route.

    // this.activatedRoute.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
    this.activatedRoute.parent.params.subscribe(params => {
      // console.log(params);
      let trackId = params;
      // this.searchService.getTrackList(trackId.artistId);
      this.tracks = [];
      this.loading = true;
      this.tracksCount = undefined;
      this.searchService.getTrackList(trackId.artistId).then( res => {
        this.tracks = res;
        this.tracksCount = this.searchService.getResultCount("tracks");
        this.loading = false;
        console.log(this.tracks);
      });
    });
  }

  ngOnInit() {
  }

}
