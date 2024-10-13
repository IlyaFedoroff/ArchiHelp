import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Сервис доступен для всего приложения
})
export class SearchService {
  private apiUrl = 'http://localhost:5076/api/documents';  // URL API backend

  constructor(private http: HttpClient) { }

  // Метод для поиска документов
  searchDocuments(query: string): Observable<any[]> {
    const url = `${this.apiUrl}?search=${query}`;
    return this.http.get<any[]>(url);
  }

  // Метод для получения всех документов
  getDocuments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
