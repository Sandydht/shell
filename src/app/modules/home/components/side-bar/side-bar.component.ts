import { Component } from '@angular/core';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [
    CommonModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  menuList: {
    id: number;
    icon: string;
    label: string;
    url: string;
  }[] = [
    {
      id: 1,
      icon: 'assets/images/icons/svg/dashboard_24px_outlined_white.svg',
      label: 'Dashboard',
      url: '/dashboard'
    }
  ]
}
