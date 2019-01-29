import { createStore, applyMiddleware } from 'redux'
import pagingReducer from "../reducers"
import thunkMiddleware from 'redux-thunk'


export default function TableStore() 
{
    const store = createStore(
        pagingReducer,
        applyMiddleware(
            thunkMiddleware
        )
    )
    
    return store
}