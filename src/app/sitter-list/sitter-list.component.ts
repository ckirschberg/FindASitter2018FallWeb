import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.scss']
})
export class SitterListComponent implements OnInit {
  sitters: Sitter[];

  // DI - Dependency injection
  constructor(private tempData: TempDataService) { 
    this.sitters = tempData.getSitters();
  }

  ngOnInit() {
  }

  whatEverYouLike(sitter) {
    console.log(sitter);
  }

}
