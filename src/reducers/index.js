import {combineReducers} from 'redux'
import pagingReducer from './pagingReducer'


const newsBlockReducer = combineReducers ({
    pagingReducer
})

export default newsBlockReducer
