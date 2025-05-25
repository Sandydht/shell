import { Component } from '@angular/core';
import { ProfilePopoverComponent } from './components/profile-popover/profile-popover.component';
import { NotificationPopoverComponent } from './components/notification-popover/notification-popover.component';

@Component({
  selector: 'app-app-bar',
  imports: [
    ProfilePopoverComponent,
    NotificationPopoverComponent
  ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent {

}
