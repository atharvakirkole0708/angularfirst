import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [NgxChartsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  single: any[] = [
    { name: 'Category A', value: 30 },
    { name: 'Category B', value: 70 },
    { name: 'Category C', value: 13000 }
  ];

  multi: any[] = [
    {
      name: 'Product 1',
      series: [
        { name: '2021', value: 50 },
        { name: '2022', value: 80 },
        { name: '2023', value: 120 }
      ]
    },
    {
      name: 'Product 2',
      series: [
        { name: '2021', value: 30 },
        { name: '2022', value: 60 },
        { name: '2023', value: 90 }
      ]
    }
  ];

  view: [number, number] = [300, 300]; // Chart size

  // Chart options
  showLegend = true;
  showLabels = true;
  gradient = false;
  colorScheme = 'cool';
}
