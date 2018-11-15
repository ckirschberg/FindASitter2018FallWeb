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
    private ngRedux: NgRedux<IAppState>) {} 

  static SET_IS_BABY: string = 'SET_IS_BABY'; 
  static CREATE_SITTER: string = 'CREATE_SITTER'; 
  static DELETE_SITTER: string = 'DELETE_SITTER'; 
  static UPDATE_SITTER: string = 'UPDATE_SITTER'; 
 
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

  deleteSitter(id: String) : void {
    console.log("calling deleteSitter" + id);
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_SITTER,
      payload: id
    })
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