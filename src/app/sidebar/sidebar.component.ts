import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isHidden = true; // Sidebar is open by default

  toggleSidebar() {
    this.isHidden = !this.isHidden;
  }
}
