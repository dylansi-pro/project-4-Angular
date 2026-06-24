import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { BankService } from '../../services/bank';
import { RouterLink } from '@angular/router';
import { DatePipe, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  transactions: Transaction[] = [];

  constructor(private bankService: BankService, private cdr: ChangeDetectorRef) {} // Ajoute le cdr

  ngOnInit() {
    this.bankService.getTransactions().subscribe(data => {
      this.transactions = data;
      console.log('Données chargées, taille :', this.transactions.length);
      
      // Force Angular à mettre à jour la vue
      this.cdr.detectChanges(); 
    });
  }


  // Fonction de tri 
  trier(critere: keyof Transaction) {
  this.transactions.sort((a, b) => {
  
    const valA = a[critere] ?? '';
    const valB = b[critere] ?? '';

    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
  this.cdr.detectChanges();
}
}