import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class BankService {
  // Chemin vers mes données
  private baseUrl = 'data';

  constructor(private http: HttpClient) {}
  // Récuperer toute la liste de transaction
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions.json`);
  }
  // Récuperer la transaction par ID
  getTransactionDetail(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${id}.json`);
  }
}