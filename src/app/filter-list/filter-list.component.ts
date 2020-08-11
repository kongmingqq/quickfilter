import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  public list$: Observable<string[]>;
  public list: string[];
  public result: string[];
  public filters: string;

  constructor(private dataService: DataService) { 
    
  }

  ngOnInit(): void {
    this.list$ = this.dataService.fetchList()
    this.list$
      .subscribe((data: string[]) => {
        console.log('fetchList succeeded', data);
        if (!Array.isArray(data)) {
          alert('Unexpected error: data is not Array');
          return;
        }
        this.list = data;
        this.result = this.list;
      }, (error) => {
        console.error('fetchList failed', error);
        alert('Error: ' + error);
      });
    this.result = ['Loading'];
  }

  onKey(event) {
    // console.log("onkey: ", event, event.target.value);
    this.filters = event.target.value;
    this.onFilterChange();
  }

  onFilterChange() {
    console.log("filters: ", this.filters);
    let temp = [];
    let keyword = this.filters.toLowerCase();
    this.list.forEach(function (p: string) {
      if (p.toLocaleLowerCase().includes(keyword)) {
        temp.push(p);
      }
    }); 
    this.result = temp;
  }
}
