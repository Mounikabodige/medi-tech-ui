import {Component, OnInit} from '@angular/core';
import {Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doughnutChartLabels = ['Performance A', 'Performance B'];
  public doughnutChartData = [90, 10];
  public doughnutChartType = 'doughnut';
  public doughnutChartLabels2 = ['Performance A', 'Performance B'];
  public doughnutChartData2 = [60, 40];
  public doughnutChartType2 = 'doughnut';
  public barChartLabels = ['Design', 'Packing', 'Cutting', 'Milling'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public doughnutchart1 = {
    cutoutPercentage: 75,
    type: 'line',
    title: {
      text: 'Enterprise Perfomance',
      display: true,
      fontSize: 50,
      position: 'top',
    }
  };
  public doughnutchart2 = {
    cutoutPercentage: 75,
    title: {
      text: 'Equipment Efficiency',
      display: true,
      fontSize: 50,
      position: 'top',      horizontalAlign: 'left',
      verticalAlign: 'top',
    }
  };

  public barChartColors: Color[] = [
    {backgroundColor: '#0073e6'},
    {backgroundColor: '#e68a00'},
  ];
  public doughnutColors: Color[] = [
    {backgroundColor: ['#e68a00', '#ffbf00']},
    {borderColor: ['#AEEBF2', '#FEFFC9']}];

  public barChartData = [
    {data: [55, 30, 60, 50], label: 'InProgress', stack: 'a'},
    {data: [75, 40, 120, 100], label: 'Completed', stack: 'a'}
  ];


  constructor() {
  }

  public barChartOptions = {
    title: {
      text: 'Progress By Department',
      display: true,
      fontSize: 50,
    },
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          steps: 10,
          stepValue: 10,
          max: 200,
        }
      }]
    }
  };

  ngOnInit() {
  }

}
