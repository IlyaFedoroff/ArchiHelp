import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SearchService } from '../services/search.service';  // Сервис для поиска

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  documents: any[] = []; // Изначально пустой массив

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getDocuments().subscribe(results => {
      this.documents = results; // Получаем данные из API и присваиваем их переменной
    });
  }
}
