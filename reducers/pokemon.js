import { SEARCH_INPUT_CHANGED, MARK_CAUGHT } from '../constants/ActionTypes';
import { Pokemon } from '../constants/Pokemon';

const initialState = {
  pokemon : Pokemon,
  searchTerm : '',
  caughtPokemon : []
};

export default function pokemon(state = initialState, action) {

  switch (action.type) {

  case MARK_CAUGHT:

    return {
      ...state,   caughtPokemon : [...state.caughtPokemon, action.name]
    };

  default:
    return state;
  }
}
