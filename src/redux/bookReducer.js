import { BUY_BOOK } from './bookTypes';

const initialState  = {
    numberOfBooks: 10
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_BOOK: return{
            ...state, 
            numberOfBooks: state.numberOfBooks -1
        }
        default: return state
    }
}

export default bookReducer;