import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-artist-videos-list',
  templateUrl: './artist-videos-list.component.html',
  styleUrls: ['./artist-videos-list.component.css']
})
export class ArtistVideosListComponent implements OnInit {
  public videos: any[];
  public loading = false;
  public videosCount: number;
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {
    this.activatedRoute.parent.params.subscribe(params => {
      let trackId = params;
      // this.searchService.getAlbumList(trackId.artistId);
      this.videos = [];
      this.loading = true;
      this.videosCount = undefined;
      this.searchService.getVideoList(trackId.artistId).then( res => {
        this.videos = res;
        this.videosCount = this.searchService.getResultCount("videos");
        // console.log("albumsCount = ", this.albumsCount);
        this.loading = false;
        // console.log(this.videos);
      });
    });
  }
  ngOnInit() {
  }

}
