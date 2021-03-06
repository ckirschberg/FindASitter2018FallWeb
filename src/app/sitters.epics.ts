import { CrudService } from './crud.service';
import { ActionsObservable } from "redux-observable";
import 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SittersActions } from "./sitters.actions";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SittersEpics {

  constructor(private crudService: CrudService) {}

  //name of epic function 
  createSitter = (action$: ActionsObservable<any>) => {
    return action$.ofType(SittersActions.CREATE_SITTER) // Listen for this action
      .mergeMap(({payload}) => { // payload: (sitter: Sitter): When this action is activated, call ws through service class or directly like below
        console.log("epic says hi");
          return this.crudService.createSitter(payload)
            .map(result => ({ // when web service responds with success, call this action with payload that came back from webservice
              type: SittersActions.CREATE_SITTER_SUCCESS,
              payload: result
            }))
            .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
              type: SittersActions.CREATE_SITTER_FAILURE,
              payload: error.json()
          }));
    });
  }
}