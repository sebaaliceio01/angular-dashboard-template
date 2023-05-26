import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { IBaseTable, IColumns, ITableActions } from 'src/app/interfaces/base-table.interface';
import { AuthenticationService } from 'src/app/utils/keycloak/services/authentication.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})

export class BaseTableComponent<T> {
  selectAll: boolean = false

  @Input() baseTable: IBaseTable<T> = {
    dataSource: [],
    columns: [],
    actions: [],
  }

  @Input() showActions: boolean = true

  @Output() selectedRows: EventEmitter<any[]> = new EventEmitter<any[]>()
  @Output() onPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()
  @Output() actionClicked = new EventEmitter<any>();

  selection = new SelectionModel<any>(true, [])

  public _dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);

  public displayedColumns: string[];

  ngOnInit(): void {
    this.displayedColumns = this.baseTable.columns.map((baseTable: IColumns) => baseTable.caption)

    if (this.baseTable.actions && this.showActions) {
      this.displayedColumns.push('actions')
    }
  }

  parseActions(element: T): ITableActions<T>[] {
    let response: ITableActions<T>[] = []

    response = this.baseTable.actions ? this.baseTable.actions?.map((result) => {
      return {
        name: result.name,
        element: element,
        role: result.role ? result.role : '',
        action: result.action,
        icon: result.icon
      }
    }) : [] as any

    return response
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this._dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selectedRows.emit([])
      this.selection.clear();
      return;
    }

    //@ts-ignore
    this.selection.select(...this._dataSource.data);

    this.selectedRows.emit(this.selection.selected)
  }

  onPageChangeEvent($event: PageEvent): void {
    this.onPageChange.emit($event)
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    this.selectedRows.emit(this.selection.selected)
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
