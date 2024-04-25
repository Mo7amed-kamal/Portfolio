import { Component, OnInit } from '@angular/core';
declare let AOS:any

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{


    ngOnInit() {
    AOS.init();
    }
}
