import { CrudService } from './crud.service';
import { Component } from '@angular/core';

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
    
    this.crudService.getAllSitters().subscribe(result => {
      console.log(result);
    });

    console.log("I am done calling the webservice");
  }
}
