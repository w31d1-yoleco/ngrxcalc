import { Component, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community'; // Column Definitions Interface
import { Observable, filter } from 'rxjs';
import { CalcMemory } from '../actions/reducer';

@Component({
  selector: 'app-calctable',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './calctable.component.html',
  styleUrl: './calctable.component.css'
})

export class CalctableComponent {


  private grid!: GridApi
  public rowSelection: 'single' | 'multiple' = 'single';

  memory$: Observable<CalcMemory> 
  rowData: Array<MemoryRow> = new Array;
  
  constructor(private store: Store<{ memory: CalcMemory }>) {
    this.memory$ = store.pipe(select('memory'));
    //Check if the updated memory value is not equal to the given one
    this.memory$.pipe(filter(mem => this.rowData.at(this.rowData.length -1)?.memory != mem.memory)).subscribe(mem => {
      this.rowData = this.rowData.concat({memory: mem.memory})
      //this.grid.setGridOption('rowData', this.rowData)
    })
  }

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "memory", 
      valueFormatter: params => { return (Math.round(params.value * 100) / 100).toFixed(2); }
    }
  ]

  onGridReady(params: GridReadyEvent) {
    this.grid = params.api;
  }

  onSelectionChanged() {
    const selectedRows = this.grid.getSelectedRows();
    if(selectedRows.length === 1)console.log(selectedRows[0].memory)
  }

}

interface MemoryRow {
  memory: number
}