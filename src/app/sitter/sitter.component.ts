import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.scss']
})
export class SitterComponent implements OnInit {
  @Input('data') sitter: Sitter;
  @Output() whatEverIWant: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  shareSitter() : void {
    this.whatEverIWant.emit(this.sitter);
  }

}
