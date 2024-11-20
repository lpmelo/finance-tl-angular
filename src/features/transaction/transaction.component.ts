import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {
  router = inject(Router);
  editMode = false;

  ngOnInit(): void {
    this.editMode = this.router.url.includes('/edit');
  }
}
