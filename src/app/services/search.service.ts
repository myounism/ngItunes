import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import {SearchItem} from '../models/searchItem';
import {Track} from '../models/Track';
import {Album} from '../models/Album';
import {Video} from '../models/Video';

@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  apiRootLookup = 'https://itunes.apple.com/lookup';
  records: SearchItem[];
  tracks: Track[];
  albums: Album[];
  videos: Video[];
  loading: boolean;
  recordsCount: number;
  tracksCount: number;
  albumsCount: number;
  videosCount: number;

  constructor(private http: HttpClient) {
    this.records = [];
    this.loading = false;
  }


  // via promises
  search(term: string) {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      return this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
          let response = <ResponseObj>res;
          this.recordsCount = response.resultCount;
          console.log("responseObject", response);
          this.records  = response.results.map(item => {
                                  return new SearchItem(
                                      item.trackName,
                                      item.artistName,
                                      item.trackViewUrl,
                                      item.artworkUrl30,
                                      item.artistId
                                  );
                                }) || [];
          return this.records;
        },
        errorMsg => { // Error
          console.error('An error occurred', errorMsg);
          console.error(`Error: ${errorMsg.status} ${errorMsg.statusText}`);
          return Promise.reject(errorMsg.message || "error");
        }
      );
  }

  getPreviousSearchRecords() {
    // console.log("records i possess", this.records);
    return this.records || [];
  }


  getTrackList(artistId) {
    // console.log("getTrackList... i got this artistId", artistId );
    let apiURL = `${this.apiRootLookup}?id=${artistId}&entity=song`;
    // console.log('apiUrl = ', apiURL);

    return this.http.get(apiURL)
    .toPromise()
    .then(
      res => { // Success
        let response = <ResponseObj>res;
        // console.log("responseObject", response);
        this.tracksCount = response.resultCount;
        this.tracks  = response.results.map(item => {
                                return new Track(
                                  item.trackName,
                                  item.artworkUrl100,
                                  item.trackViewUrl
                                );
                              }) || [];
        // console.log("this.tracks", this.tracks);
        return this.tracks;
      },
      errorMsg => { // Error
        console.error('An error occurred', errorMsg);
        console.error(`Error: ${errorMsg.status} ${errorMsg.statusText}`);
        return Promise.reject(errorMsg.message || "error");
      }
    );
  }

  getAlbumList(artistId) {
    // console.log("getAlbumList... i got this artistId", artistId );
    let apiURL = `${this.apiRootLookup}?id=${artistId}&entity=album`;
    // console.log('apiUrl = ', apiURL);
    return this.http.get(apiURL)
    .toPromise()
    .then(
      res => { // Success
        let response = <ResponseObj>res;
        this.albumsCount = response.resultCount;
        // console.log("responseObject", response);
        this.albums  = response.results.map(item => {
                                return new Album(
                                  item.collectionName,
                                  item.artworkUrl100,
                                  item.collectionViewUrl
                                );
                              }) || [];
        // console.log("this.tracks", this.tracks);
        return this.albums;
      },
      errorMsg => { // Error
        console.error('An error occurred', errorMsg);
        console.error(`Error: ${errorMsg.status} ${errorMsg.statusText}`);
        return Promise.reject(errorMsg.message || "error");
      }
    );
  }

  getVideoList(artistId) {
    // console.log("getAlbumList... i got this artistId", artistId );
    let apiURL = `${this.apiRootLookup}?id=${artistId}&entity=musicVideo`;
    // https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo
    console.log('apiUrl = ', apiURL);
    return this.http.get(apiURL)
    .toPromise()
    .then(
      res => { // Success
        let response = <ResponseObj>res;
        this.videosCount = response.resultCount;
        // console.log("responseObject", response);
        this.videos  = response.results.map(item => {
                                return new Video(
                                  item.trackName,
                                  item.artworkUrl100,
                                  item.previewUrl
                                );
                              }) || [];
        console.log("this.videos", this.videos);
        return this.videos;
      },
      errorMsg => { // Error
        console.error('An error occurred', errorMsg);
        console.error(`Error: ${errorMsg.status} ${errorMsg.statusText}`);
        return Promise.reject(errorMsg.message || "error");
      }
    );
  }

getArtistInfo(artistId) {
  // console.log("getAlbumList... i got this artistId", artistId );
  let apiURL = `${this.apiRootLookup}?id=${artistId}`;
  // console.log('apiUrl = ', apiURL);
  return this.http.get(apiURL)
  .toPromise()
  .then(
    res => { // Success
      let response = <ResponseObj>res;
      return response.results || { };
    },
    errorMsg => { // Error
      console.error('An error occurred', errorMsg);
      console.error(`Error: ${errorMsg.status} ${errorMsg.statusText}`);
      return Promise.reject(errorMsg.message || "error");
    }
  );
}

  getResultCount(countOf: string): number {
    switch (countOf) {
      case "records":
        return this.recordsCount;
      case "tracks" :
        return this.tracksCount;
      case "albums" :
        return this.albumsCount;
      case "videos" :
        return this.videosCount;
    }
  }


  isLoggedIn(): boolean {
    return true;
  }
}

interface ResponseObj {
  resultCount: number;
  results: Array<any>;
}
