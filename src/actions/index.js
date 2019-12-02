import { ADD_ITEM, DELETE_ITEM, GET_ITEMS_ALL, API_ERROR } from '../constants';
import axios from 'axios';

export function addItem(item) {
    return (dispatch) => {
        const url = 'http://localhost:3000/api/v1/todo-item';
        const data = {
            ...item
        };
        axios.post(url, data)
        .then((res) => {
            dispatch({
                type: ADD_ITEM,
                payload: res
            })
        })
        .then((res) => {
            dispatch(getItemsAll());            
        })
        .catch((reason) => { 
            dispatch({
            type: API_ERROR,
            payload: reason
            });
        });
    };
}

export function deleteItem(id) {
    return (dispatch) => {
        const url = 'http://localhost:3000/api/v1/todo-item/' + id;
        axios.delete(url)
        .then((res) => {
            dispatch({
                type: DELETE_ITEM,
                payload: res
            })
        })
        .then((res) => {
            dispatch(getItemsAll());            
        })
        .catch((reason) => { 
            dispatch({
            type: API_ERROR,
            payload: reason
            });
        });
    };
}

export function getItemsAll() {
    console.log('getItemsAll');
    
    return (dispatch) => {
        const url = 'http://localhost:3000/api/v1/todo-item';
        const res = axios.get(url)
        .then((res)=>{
            dispatch({
                type: GET_ITEMS_ALL,
                payload: res.data
            });
        })
        .catch((reason) => {
            dispatch({
                type: API_ERROR,
                payload: reason
            });
        });   
    };
}
