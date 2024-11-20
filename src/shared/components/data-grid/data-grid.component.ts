import { Component, Input, OnInit } from '@angular/core';

type ColumnDefT = {
  width?: string | undefined;
  name: string;
  title: string;
};

@Component({
    selector: 'data-grid',
    templateUrl: './data-grid.component.html',
    styleUrl: './data-grid.component.scss',
    standalone: false
})
export class DataGridComponent implements OnInit {
  @Input() data: Array<any> = [];
  @Input() columns: Array<ColumnDefT> = [];

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((column) => column.name);
  }
}
