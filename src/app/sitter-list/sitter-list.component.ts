import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.scss']
})
export class SitterListComponent implements OnInit {
  sitters: Sitter[];
  errorMessage: String;
  birthDate: Date = new Date(2018, 2, 1);
  public search: string = '';

  // DI - Dependency injection
  constructor(private tempData: TempDataService, 
    private ngRedux: NgRedux<IAppState>) { 
    // this.sitters = tempData.getSitters();
  }

  ngOnInit() {
    this.ngRedux.select(res => res.sitters).subscribe((data) => {
      console.log("redux says: ", data);
      this.sitters = data.sitters;
      this.errorMessage = data.errorMessage;
    })
  }

  whatEverYouLike(sitter) {
    console.log(sitter);
  }

}
