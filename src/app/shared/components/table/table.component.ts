import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Route } from '../../../interfaces/route.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: Route[] = [];
  @Input() columns: string[] = [];
  @Input() headers: string[] = [];

  displayLimit: number = 6;
  isOpen: boolean = false;

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.displayLimit = this.isOpen ? this.data.length : 6;
  }

  showToggleBtn(): boolean {
    return this.data.length > 6;
  }
}
