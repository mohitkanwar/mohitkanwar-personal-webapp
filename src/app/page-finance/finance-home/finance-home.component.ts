import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-finance-home',
  templateUrl: './finance-home.component.html',
  styleUrls: ['./finance-home.component.css']
})
export class FinanceHomeComponent implements OnInit, AfterViewInit {

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
  root((FinTech))
    User Experience
      Availability
      Device Support
    New Age features
      Personalization
      Internationalization
    Partnerships
      Integrations
      Data Sharing and Security
    Analytics and AI
      Smart Reports
      Cost effectiveness
    `;
   
    const element: any = this.diagramContainer.nativeElement;
    mermaid.render('id1', mermaidCode).then(result => {
      this.diagramContainer.nativeElement.innerHTML = result.svg;
      
      result.bindFunctions
    });

  }

}
