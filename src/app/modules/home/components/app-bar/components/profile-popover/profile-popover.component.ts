import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../../shared/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-profile-popover',
  imports: [
    CommonModule,
    ClickOutsideDirective
  ],
  templateUrl: './profile-popover.component.html',
  styleUrl: './profile-popover.component.css'
})
export class ProfilePopoverComponent {
  isOpenDropdown: boolean = false;

  toggleDropdown(): void {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  closeDropdown(): void {
    this.isOpenDropdown = false;
  }
}
