import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SearchService} from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist/artist-album-list/artist-album-list.component';
import {AlwaysAuthGuard} from './guards/always-auth.guard';
import {OnlyLoggedInUsersGuard} from './guards/only-logged-in-users.guard';
import {AlwaysAuthChildrenGuard} from './guards/always-auth-children.guard';
import {UnsearchedTermGuard} from './guards/unsearched-term.guard';
import { ArtistVideosListComponent } from './artist/artist-videos-list/artist-videos-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'find', redirectTo: 'search'},
  // Since it holds an array we could have multiple guards for a single route.
  // { path: 'home', component: HomeComponent, canActivate: [AlwaysAuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'search',
    component: SearchComponent,
    canDeactivate : [UnsearchedTermGuard]
  },
  { path: 'search/:term', component: SearchComponent},
  { path: 'artist/:artistId',
    component: ArtistComponent,
    // guards will get executed in order they are declard in the array, only if all guards (allow)
    // i.e; evalute true then page ll be activated

    canActivate: [AlwaysAuthGuard, OnlyLoggedInUsersGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
      {path: 'videos', component: ArtistVideosListComponent}
    ]
  },
  // { path: '**', component: HomeComponent}
  { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes, {useHash: true}) ],
  declarations: [ AppComponent, SearchComponent, HeaderComponent, HomeComponent, PageNotFoundComponent, ArtistComponent,
                  ArtistTrackListComponent, ArtistAlbumListComponent, ArtistVideosListComponent ],
  providers: [SearchService, AlwaysAuthGuard, OnlyLoggedInUsersGuard, AlwaysAuthChildrenGuard, UnsearchedTermGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

