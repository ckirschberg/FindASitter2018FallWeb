///<reference path='./../../node_modules/immutable/dist/immutable.d.ts'/>

import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { SittersActions } from './sitters.actions';
import { SittersState } from './store';
import { Sitter } from './entities/sitter';

const INITIAL_STATE: SittersState = {isBaby: undefined, sitters: TempDataService.getSitters(), errorMessage: '' }; // 

export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
 switch (action.type) {
  case SittersActions.FAILED_DELETE_SITTER: // payload: string
    return tassign(state, {errorMessage: action.payload});

  case SittersActions.UPDATE_SITTER: // action.payload : Sitter
    // const updateArray = [...state.sitters];
    const index = state.sitters.findIndex(sitter => sitter.sitterId === action.payload.sitterId);
    // updateArray[index] = action.payload;
    return state;
    // return tassign(state, { sitters: state.sitters.set(index, action.payload)});


  case SittersActions.CREATE_SITTER:
    // Write code to copy the array and add the new sitter to the copy.
    // sitter obj. should be in action.payload
    //state.sitters.push() // NoNo => modifies state.
    // // YES YES, because it copies the original array

    const newArray = [...state.sitters, action.payload]; 
    // console.log(newArray);
    // return tassign(state, {sitters: state.sitters.push(action.payload) });
    return tassign(state, {sitters: newArray });

  case SittersActions.DELETE_SITTER: // action.payload is an id: String
    return tassign(state, {sitters: state.sitters.filter(x => x.sitterId !== action.payload)});

  case SittersActions.SET_IS_BABY:
    // pure function
    // state.isBaby = action.payload; // No No.
    // return state;
    
    // return Object.assign({}, state, {iszBaby: action.payload}); //Yes
    return tassign(state, { isBaby: action.payload }); // Yes Yes
  
  
    default:
      return state;
}
}


