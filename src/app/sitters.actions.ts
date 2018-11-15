import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
//Helper for generating redux actions.
export class SittersActions {

  constructor (
    private ngRedux: NgRedux<IAppState>, private crudService: CrudService) {} 

  static SET_IS_BABY: string = 'SET_IS_BABY'; 
  static CREATE_SITTER: string = 'CREATE_SITTER'; 
  static DELETE_SITTER: string = 'DELETE_SITTER'; 
  static UPDATE_SITTER: string = 'UPDATE_SITTER'; 
  static FAILED_DELETE_SITTER: string = 'FAILED_DELETE_SITTER'; 
 
  updateSitter(id: String, updatedSitter: Sitter) {
    this.ngRedux.dispatch({
      type: SittersActions.UPDATE_SITTER,
      payload: updatedSitter
    });
  }

  createSitter(sitter: Sitter):void {
    this.ngRedux.dispatch({
      type: SittersActions.CREATE_SITTER,
      payload: sitter
    } as any)
  }

  deleteSitter(id: string) : void {

    // Dont do this, use epics instead.
    this.crudService.deleteSitter(id).subscribe(result => {
      console.log("1");
      this.ngRedux.dispatch({
        type: SittersActions.DELETE_SITTER,
        payload: id
      });
    }, error => {
      console.log("2");
      this.ngRedux.dispatch({
        type: SittersActions.FAILED_DELETE_SITTER,
        payload: 'Something bad happened :-)'
      })
    });

    
  }

  setType(isBaby: boolean): void {
    
    // dispatch a redux action.
    this.ngRedux.dispatch(
    {
      type: SittersActions.SET_IS_BABY,
      payload: isBaby
    } as any
    
    )
  }
}