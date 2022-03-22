import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-your-cxo-circle',
  templateUrl: './your-cxo-circle.component.html',
  styleUrls: ['./your-cxo-circle.component.css']
})
export class YourCxoCircleComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  deliverables = 0;
  skills = 0;
  impact = 0;
  network = 0;
  ivisibility = 0;
  evisibility = 0;
  vertical = false;
  tickInterval = 1;

 
  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 5
      }
    }
  };
  public radarChartLabels: string[] = [ 'Deliverables', 'Skills', 'Impact', 'Network', 'Internal Visibility', 'Extenal Visibility' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ this.deliverables, this.skills, this.impact, this.network, this.ivisibility, this.evisibility], label: 'My Score' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
   
  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  onValChange() {
    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        { data: [ this.deliverables, this.skills, this.impact, this.network, this.ivisibility, this.evisibility ], label: 'My Score' },
      ]
    };
  }
}
