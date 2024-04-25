import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


    


    @ViewChild('navbar')navElement!:ElementRef
    @ViewChild('navbarCollapse')btnMobileNav!:ElementRef

    @HostListener('window:scroll')
      onscroll(){
        if(window.scrollY > 300) {
          this.navElement.nativeElement.classList.add('px-5')
        }else{
          this.navElement.nativeElement.classList.remove('px-5')

        }
      }
  

      closeNavBar(){
        this.btnMobileNav.nativeElement.classList.remove('show')
      }
}
