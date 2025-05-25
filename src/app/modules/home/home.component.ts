import { Component } from '@angular/core';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    AppBarComponent,
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
