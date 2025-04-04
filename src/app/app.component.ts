import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,NgxChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfirst';
}
