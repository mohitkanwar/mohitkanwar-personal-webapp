import { Component, OnInit } from '@angular/core';
import {Marpit} from '@marp-team/marpit';
import { Observable, Observer } from 'rxjs';
import { TutorialService } from 'src/app/shared/services/tutorial.service';
@Component({
  selector: 'app-gin-tutorial',
  templateUrl: './gin-tutorial.component.html',
  styleUrls: ['./gin-tutorial.component.css']
})
export class GinTutorialComponent implements OnInit{
  marpit: Marpit
  html: string = ''
  constructor(private tutorialService:TutorialService){
    this.marpit  = new Marpit()
  }
  ngOnInit(): void {
    const theme = `
/* @theme example */

section {
  background-color: #FFF;
  color: #000;
  font-size: 30px;
  padding: 40px;
}

h1,
h2 {
  text-align: center;
  margin: 0;
}

h1 {
  color: #8cf;
}
`

this.marpit.themeSet.default = this.marpit.themeSet.add(theme)
this.tutorialService.readBlog('gin/gin-tutorial').subscribe(markdown => {
  const { html, css } = this.marpit.render(markdown)
  this.html = html
  console.log (css)
})


  }
  
}
