import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from './sitters.reducer';

export class SittersState {
  isBaby: boolean;
  // We should store all our sitters here.
}
export class IAppState {
  sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
sitters: sittersReducer,

// router: routerReducer
});




