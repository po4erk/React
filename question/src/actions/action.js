import {CHANGE_DESCRIPTION, CHANGE_NAME} from '../constants/constants';

export const changeName = (newName) => {
    return{
        type: CHANGE_NAME,
        payload: newName
    }
}

export const changeDescription = (newDescription) => {
    return{
        type: CHANGE_DESCRIPTION,
        payload: newDescription
    }
}