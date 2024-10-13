import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';  // Сервис для поиска
import { CommonModule } from '@angular/common';  // Импорт CommonModule
import { FormsModule } from '@angular/forms';    // Импорт FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private searchService: SearchService) { }

  //onSearch() {
  //  this.searchResults = [
  //    { title: 'Документ 1' },
  //    { title: 'Документ 2' },
  //  ];
  //}

  onSearch() {
    console.log('Поисковый запрос:', this.searchQuery);
    this.searchService.searchDocuments(this.searchQuery).subscribe(results => {
      console.log('Результаты поиска:', results);
      this.searchResults = results;
    }, error => {
      console.error('Ошибка при запросе:', error);
    });
  }
}
