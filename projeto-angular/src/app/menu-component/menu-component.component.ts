import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {
  
  @Input() pessoas:any = []

}
