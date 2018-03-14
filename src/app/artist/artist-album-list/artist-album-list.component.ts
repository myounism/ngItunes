import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';
@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  public albums: any[];
  public loading = false;
  public albumsCount: number;
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
    this.activatedRoute.parent.params.subscribe(params => {
      let trackId = params;
      // this.searchService.getAlbumList(trackId.artistId);
      this.albums = [];
      this.loading = true;
      this.albumsCount = undefined;
      this.searchService.getAlbumList(trackId.artistId).then( res => {
        this.albums = res;
        this.albumsCount = this.searchService.getResultCount("albums");
        // console.log("albumsCount = ", this.albumsCount);
        this.loading = false;
        console.log(this.albums);
      });
    });
  }

  ngOnInit() {
  }

}
