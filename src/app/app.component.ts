import { CrudService } from './crud.service';
import { Component } from '@angular/core';
import { Sitter } from './entities/sitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FindASitterFall2018Web';

  // Just testing
  constructor(private crudService: CrudService) {
    
    console.log("calling webservice");
    
    this.crudService.getAllSitters().subscribe((result:Sitter[]) => {
      let myData = result.filter(sitter => sitter.customerId === 'chrk');
      console.log(myData);
    });

    console.log("I am done calling the webservice");
  }
}
