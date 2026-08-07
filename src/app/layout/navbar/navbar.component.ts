import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('toggler')
  toggler!: ElementRef<HTMLButtonElement>;

  closeNavbar() {

    if (window.innerWidth < 768) {
      this.toggler.nativeElement.click();
    }

  }

}
