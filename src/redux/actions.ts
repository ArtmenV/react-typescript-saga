import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, ADD_NEW_DATA, UPDATE_STATUS_DATA, DELETE_DATA } from './constants'
import ITodos, { IItems } from './../model/ITodos'

export const getDataTodoListRequest = () => ({ type: GET_DATA_REQUEST })

export const addNewData = (payload: IItems) => ({
    type: ADD_NEW_DATA,
    payload
})

export const updateStatusData = (payload: IItems) => ({
    type: UPDATE_STATUS_DATA,
    payload
})

export const deleteData = (payload: IItems) => ({
    type: DELETE_DATA,
    payload
})

export const getDataTodoListSuccess = (payload: ITodos) => ({
    type: GET_DATA_SUCCESS,
    payload
})

export const getDataTodoListFailure = (payload: ITodos) => ({
    type: GET_DATA_FAILURE,
    payload
})