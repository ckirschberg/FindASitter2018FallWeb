import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from './sitters.reducer';
import { Sitter } from './entities/sitter';

export class SittersState {
  isBaby: boolean;
  // We should store all our sitters here.
  sitters: Sitter[];
}
export class IAppState {
  sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
sitters: sittersReducer,

// router: routerReducer
});



