import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artist: {artistName: string, primaryGenreName: string} = {
    artistName: "",
    primaryGenreName: " "
  };

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
    this.activatedRoute.params.subscribe(params => {
      let trackId = params;
      this.searchService.getArtistInfo(trackId.artistId).then( res => {
        console.log("response i got", res[0]);
        this.artist.artistName = res[0].artistName;
        this.artist.primaryGenreName = res[0].primaryGenreName;
      });
    });
  }
  ngOnInit() {
  }

}
