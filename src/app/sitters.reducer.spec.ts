import { TempDataService } from './temp-data.service';
var deepFreeze = require('deep-freeze');
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';

describe('sitters reducer', () => {
  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined, sitters: TempDataService.getOriginalSitters() });
  });

  it('Toggle isBaby or sitter', () => {
    let state = {isBaby: undefined, sitters: []};
    deepFreeze(state);
    expect( sittersReducer(state, { type: types.SittersActions.SET_IS_BABY, payload: true })).toEqual({isBaby: true, sitters:[]});
  });

  it('should delete a sitter with a valid input', () =>{
    //1: create our initial state
    //2: use deep freeze
    //3: Expect the newly returned state from the reducer to be..
    let state = { isBaby: undefined, sitters: TempDataService.getOriginalSitters() };
    deepFreeze(state);
    let afterStateShouldBe = {isBaby: undefined, sitters: TempDataService.getOriginalSitters()};
    afterStateShouldBe.sitters.splice(1, 1);

    let newState = sittersReducer(state, { type: types.SittersActions.DELETE_SITTER, payload: '2'});
    expect( newState ).toEqual( afterStateShouldBe );
  });

  it('should delete a sitter with a in-valid input', () =>{
    //1: create our initial state
    //2: use deep freeze
    //3: Expect the newly returned state from the reducer to be..
    let state = { isBaby: undefined, sitters: TempDataService.getOriginalSitters() };
    deepFreeze(state);
    let afterStateShouldBe = {isBaby: undefined, sitters: TempDataService.getOriginalSitters()};
    // afterStateShouldBe.sitters.splice(1, 1);

    let newState = sittersReducer(state, { type: types.SittersActions.DELETE_SITTER, payload: undefined});
    // console.log(newState.sitters);
    expect( newState ).toEqual( afterStateShouldBe );
  });

});
