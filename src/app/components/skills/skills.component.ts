import { Component, OnInit } from '@angular/core';
declare let AOS:any

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  ngOnInit() {
    AOS.init();
    }

}
