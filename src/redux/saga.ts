import { takeLatest, put } from "redux-saga/effects";
import { GET_DATA_REQUEST,  GET_DATA_SUCCESS, ADD_NEW_DATA, UPDATE_STATUS_DATA, DELETE_DATA } from "./constants";
import { IItems } from './../model/ITodos';

const items: Array<IItems> = [{
    id: 'c170b53e-428a-4f35-a20d-b1e800da2d79',
    descriptions: 'Do homework',
    isComplete: false
}];

function* getData () {
    const i = yield items
    yield put({ type: GET_DATA_SUCCESS, payload: i});
}

function* addNewData (actions: any) {
    let { payload: { items, item } } = actions;
    items = [...items, item];
    yield put({ type: GET_DATA_SUCCESS, payload: items});
}

function* updateStatusData(actions: any) {
    let { payload: { items, item } } = actions;
    items = items.map((o: IItems) => {
        if(o.id === item.id)
            o.isComplete = !o.isComplete
        return o
    });
    yield put({ type: GET_DATA_SUCCESS, payload: items});
}

function* deleteData(actions: any) {
    let { payload: { items, item } } = actions;
    items = items.filter((o: IItems) => o.id === item.id ? null : o);
    yield put({ type: GET_DATA_SUCCESS, payload: items});
}

export function* watchSaga() {
    yield takeLatest(GET_DATA_REQUEST, getData);
    yield takeLatest(ADD_NEW_DATA, addNewData);
    yield takeLatest(UPDATE_STATUS_DATA, updateStatusData);
    yield takeLatest(DELETE_DATA, deleteData);
}