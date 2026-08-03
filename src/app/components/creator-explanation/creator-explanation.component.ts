import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-creator-explanation',
  imports: [],
  templateUrl: './creator-explanation.component.html',
  styleUrl: './creator-explanation.component.css'
})
export class CreatorExplanationComponent implements AfterViewInit {

  @ViewChildren('floater')
  floaters!: QueryList<ElementRef<HTMLImageElement>>;

  @ViewChild('arrow') arrow!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    this.floaters.forEach((floater, _) => {
      gsap.to(floater.nativeElement, {
        y: -5 - Math.random() * 6,
        duration: 2.5 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random()
      });
    });

    gsap.to(this.arrow.nativeElement, {
      rotation: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random()
    });
  }

}
