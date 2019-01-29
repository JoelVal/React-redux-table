import {
    FETCH_NAV_REQUEST,
    FETCH_NAV_FAILURE,
    FETCH_NAV_SUCCESS,
    LIMIT_CHANGE,
    PAGE_SWITCH
}
    from "../constants"


const initialState = {
    isFetching: false,
    data: [],
    total: 0,
    current: 0,
    skip: 0,
    limit: 10,
    dropDownBoxId: 0,
    dropDownBox: [
        10,
        15,
        20
    ]

}

function handlePages(state = initialState, action)
{
    switch (action.type) {
        case FETCH_NAV_REQUEST:
            return {
                ...state,
                isFetching: true,
                limit: action.limit,
                skip: action.skip
            }
        
        case FETCH_NAV_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.data,
                total: action.total,
                
            }
        }

        case FETCH_NAV_FAILURE: {
            return {
                ...state,
                isFetching: false
            }
        }

        case LIMIT_CHANGE: {
            return {
                ...state,
                dropDownBoxId: action.dropDownBoxId,
                skip: 0,
                limit: state.dropDownBox[action.dropDownBoxId],
                current: 1
            }
        }
        
        case PAGE_SWITCH: {
            return {
                ...state,
                skip: action.skip,
                current: action.current
            }
        }
        default:
            return state
    }
}

export default handlePages