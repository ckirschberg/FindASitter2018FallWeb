import { TempDataService } from './temp-data.service';
import { tassign } from 'tassign';
import { SittersActions } from './sitters.actions';
import { SittersState } from './store';

const INITIAL_STATE: SittersState = {isBaby: undefined, sitters: TempDataService.getSitters()};

export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
 switch (action.type) {
  
  case SittersActions.CREATE_SITTER:
    // Write code to copy the array and add the new sitter to the copy.
    // sitter obj. should be in action.payload
    //state.sitters.push() // NoNo => modifies state.
    // YES YES, because it copies the original array
    const newArray = [...state.sitters, action.payload]; 
    console.log(newArray);
    return tassign(state, {sitters: newArray });

  case SittersActions.SET_IS_BABY:
    // pure function
    // state.isBaby = action.payload; // No No.
    // return Object.assign({}, state, {issBaby: action.payload}); //Yes

    return tassign(state, { isBaby: action.payload }); // Yes Yes
  
  
    default:
    return state;
}
}


