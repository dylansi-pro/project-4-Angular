import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BankService } from '../../services/bank';
import { Transaction } from '../../models/transaction.model';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnInit {
  transaction?: Transaction;

  constructor(
    private route: ActivatedRoute,
    private bankService: BankService,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bankService.getTransactionDetail(id).subscribe(data => {
        this.transaction = data;
        this.cdr.detectChanges();
      });
    }
  }
}