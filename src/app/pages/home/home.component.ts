import { Component } from '@angular/core';
import { ActionComponent } from '../../shared/action/action.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
