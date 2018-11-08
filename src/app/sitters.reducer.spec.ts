var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';

describe('sitters reducer', () => {
  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined, sitters: [] });
  });

  it('Toggle isBaby or sitter', () => {
    let state = {isBaby: undefined, sitters: []};
    deepFreeze(state);
    expect( sittersReducer(state, { type: types.SittersActions.SET_IS_BABY, payload: true })).toEqual({isBaby: true, sitters:[]});
  });
});
