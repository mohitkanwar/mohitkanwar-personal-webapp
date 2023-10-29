import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mermaid from 'mermaid';
@Component({
  selector: 'app-technology-home',
  templateUrl: './technology-home.component.html',
  styleUrls: ['./technology-home.component.css']
})
export class TechnologyHomeComponent implements OnInit, AfterViewInit {

  @ViewChild('diagramContainer') diagramContainer: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log('initializing mermaid')
    this.renderMermaidDiagram();
  }
  renderMermaidDiagram() {
    const config = {
      startOnLoad: true,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'cardinal'
      },
      securityLevel: 'loose',
   };
    mermaid.initialize(config);
  
    // Mermaid code for your diagram
    const mermaidCode = `
    mindmap
  root((softwareDevelopment))
    Web
      Angular
      React
    Mobile
      Kotlin
      Swift
    Services
      Java
      NodeJs
      GoLang
    DevOps
      Kubernetes
      Docker
    `;
   
    const element: any = this.diagramContainer.nativeElement;
    mermaid.render('id1', mermaidCode).then(result => {
      this.diagramContainer.nativeElement.innerHTML = result.svg;
      
      result.bindFunctions
    });

  }
}
