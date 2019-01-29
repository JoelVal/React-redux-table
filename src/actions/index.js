import {
    FETCH_NAV_REQUEST,
    FETCH_NAV_FAILURE,
    FETCH_NAV_SUCCESS,
    LIMIT_CHANGE,
    PAGE_SWITCH
}
    from "../constants"
    import fetch from "isomorphic-fetch"

export function fetchPage()
{
    return (dispatch, getState) => {
        const state = getState()
        dispatch(fetchResponse(state.pagingReducer.limit, state.pagingReducer.skip))
    }
}

function fetchResponse(limit, skip)
{
    return (dispatch) => {
        dispatch(fetchNavRequest(limit, skip))
        return fetch(`/page?limit=${limit}&skip=${skip}`, {
            method: 'GET'
        })
        .then(res => {
            return res.json()
        })
        .then(data => {dispatch(fetchNavSucces(data))
        })
        .catch(error => {dispatch(fetchNavfailure(error))})
        
    }
}

function fetchNavRequest(limit, skip)
{
    return {
        limit,
        skip,
        type: FETCH_NAV_REQUEST
    }
}

function fetchNavSucces(data)
{
    return {
        type: FETCH_NAV_SUCCESS,
        data: data.pageData,
        total: data.total
    }
}

function fetchNavfailure(error)
{
    return {
        type: FETCH_NAV_FAILURE,
        error
    }
}

export function changeLimit(dropDownBoxId)
{
    return {
        type: LIMIT_CHANGE,
        dropDownBoxId
    }
}

export function switchPage(skip, current)
{
    return {
        type: PAGE_SWITCH,
        skip,
        current
    }
}
