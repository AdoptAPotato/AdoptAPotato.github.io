import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TextPlugin } from 'gsap/TextPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit {

  @ViewChild('title') title!: ElementRef<HTMLSpanElement>;
  @ViewChild('cursor') cursor!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.to(this.title.nativeElement, {
      duration: 2,
      text: { value: 'یه سیب‌زمینی به سرپرستی بگیر!' },
      ease: 'none'
    }).to(this.cursor.nativeElement, {
      autoAlpha: 0
    });
  }

}
