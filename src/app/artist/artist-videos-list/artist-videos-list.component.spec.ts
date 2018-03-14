import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistVideosListComponent } from './artist-videos-list.component';

describe('ArtistVideosListComponent', () => {
  let component: ArtistVideosListComponent;
  let fixture: ComponentFixture<ArtistVideosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistVideosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistVideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
