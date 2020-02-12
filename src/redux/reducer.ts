import ITodos from './../model/ITodos'
import IAction from './../model/IAction'
import { GET_DATA_REQUEST, GET_DATA_SUCCESS } from './constants'

const initialState: ITodos = {
    items: []
}

export function reducer (state: ITodos = initialState, { type, payload }: IAction): ITodos {
    switch(type) {
        case GET_DATA_REQUEST:
            return {
                ...state
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                items: payload
            }
        default:
            return state;
    }
} 