///<reference path='./../../node_modules/immutable/dist/immutable.d.ts'/>

import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from './sitters.reducer';
import { Sitter } from './entities/sitter';

export class SittersState {

  static getEmptyState() {
    return {isBaby: undefined, sitters: [], errorMessage: ''};
  }

  isBaby: boolean;
  // We should store all our sitters here.
  // sitters: Immutable.List<Sitter>;
  sitters: Sitter[];
  errorMessage: String;
  isLoading: boolean;
}
export class IAppState {
  sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
sitters: sittersReducer,

// router: routerReducer
});




