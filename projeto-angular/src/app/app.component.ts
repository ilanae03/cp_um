import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
  mensagem:string = 'Olá mundo!'
  interesses = [
    {nome: "Ilan", interesse: ["programação", "Viagem", "Cozinhar"]},
    {nome: "Fernanda", interesse: ["programação", "Viagem", "Música"]}
  ]
}
