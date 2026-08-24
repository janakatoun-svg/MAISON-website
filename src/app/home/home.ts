import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;

    video.muted = true;

    video.play().catch(error => {
      console.log('Video autoplay was blocked:', error);
    });
  }
}