import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TempDataService } from '../temp-data.service';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {
  editSitter;
  sitter: Sitter;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private tempData: TempDataService, private router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(id);

      // Based on the id, retrieve the sitter-object from the temp-data service.
      // and populate the form with the data. (firstname, lastname, location). 
      // When a user clicks the "save"-button, the sitter's data should be 
      // replaced in the temp-data service.
      this.sitter = this.tempData.getSitter(id);

      this.editSitter = this.fb.group({
        firstname: [this.sitter.firstname, Validators.required],
        lastname: [this.sitter.lastname, Validators.required],
        location: [this.sitter.location, Validators.required],
      });
  

    });


  }

  onSubmit(editForm) {
    console.log(editForm.value);
    let sitter = editForm.value as Sitter;

    this.tempData.updateSitter(editForm.value, this.sitter.sitterId);

    this.router.navigate(['/portal/find-a-sitter']);
  }
}
