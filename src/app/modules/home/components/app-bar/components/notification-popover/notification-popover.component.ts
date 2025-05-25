import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../../shared/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-notification-popover',
  imports: [
    CommonModule,
    ClickOutsideDirective
  ],
  templateUrl: './notification-popover.component.html',
  styleUrl: './notification-popover.component.css'
})
export class NotificationPopoverComponent {
  isOpenDropdown: boolean = false;

  toggleDropdown(): void {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  closeDropdown(): void {
    this.isOpenDropdown = false;
  }
}
