import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navtop') navBar: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.disparaScroll(this.navBar);
  }
 
  disparaScroll(myElement: ElementRef) {
    let el = myElement;
    window.addEventListener( 'scroll', function() {
      if (window.scrollY > 20) {
        el.nativeElement.classList.add("sobreposto");
        el.nativeElement.classList.remove("estatico");
      } else {
        el.nativeElement.classList.remove("sobreposto");
        el.nativeElement.classList.add("estatico");
      }
    });
  }
}
