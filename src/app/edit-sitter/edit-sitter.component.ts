import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {
  editSitter;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editSitter = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      location: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      let id = params["id"];
      console.log(id);

      // Based on the id, retrieve the sitter-object from the temp-data service.
      // and populate the form with the data. (firstname, lastname, location). 
    });
  }

  onSubmit(editForm) {
    console.log(editForm.value);

  }
}
