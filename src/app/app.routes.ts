import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},{path:'',component:HomeComponent},{path:'sidebar',component:SidebarComponent}
];
