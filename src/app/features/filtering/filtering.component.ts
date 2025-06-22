import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../../shared/components/table/table.component';
import { Route } from '../../interfaces/route.interface';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [CommonModule, FormsModule, TableComponent, SearchComponent],
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilterComponent {
  @Input() data: Route[] = [];
  searchQuery: string = '';

  onSearchChange(query: string) {
    this.searchQuery = query;
  }

  get filteredData(): Route[] {
    if (!this.searchQuery) {
      return this.data;
    }
    const query = this.searchQuery.toLowerCase();
    return this.data.filter(item =>
      item.address.toLowerCase().includes(query) ||
      item.gateway.toLowerCase().includes(query) ||
      item.interface.toLowerCase().includes(query)
    );
  }
}