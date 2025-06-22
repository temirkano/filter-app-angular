import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './features/filtering/filtering.component';
import { ipData } from './interfaces/route.interface'; // Убедитесь, что путь к интерфейсу правильный

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'Действующие маршруты IPv4';

  protected ip4Data = ipData;
}
