import {CHANGE_DESCRIPTION, CHANGE_NAME} from '../constants/constants';

const initialState = {
    name: '',
    description: ''
}

export default function question(state = initialState, action){
    // eslint-disable-next-line
    switch(action.type){
        case CHANGE_NAME: 
            return{...state, name: action.payload}
        case CHANGE_DESCRIPTION: 
            return{...state, description: action.payload}
    }
    
    return state;
}