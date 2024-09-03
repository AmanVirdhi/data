import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ItemsAPIService } from './services/items-api.service';
import { data } from '../shared/models/data';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})

export class DisplayItemsComponent implements AfterViewInit {
  
  constructor(private listService: ItemsAPIService) {}

  displayedColumns: string[] = ['_id','name', 'country', 'logo','slogan','head_quaters','website','established'];

  dataSource = new MatTableDataSource<data>;
  selection = new SelectionModel<data>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDataList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ///to listing element in table (we use get API TO display and fetch data)//
  myData: any;
  getDataList() {
    this.listService.getdata().subscribe(res => {
      this.myData = res;
      this.dataSource.data = this.myData;
    });
  }

}
