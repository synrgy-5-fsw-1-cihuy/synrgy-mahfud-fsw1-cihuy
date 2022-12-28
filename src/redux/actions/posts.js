import { END_LOADING, FETCH_ALL, FETCH_BY_ID, FETCH_BY_SEARCH, START_LOADING } from './actionType'
import * as api from '../../config/api'

export const getCars = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getCarsById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPostsById(id)
        dispatch({ type: FETCH_BY_ID, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getCarsBySearch = (data) => (dispatch) => {
    try {
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
    } catch (error) {
        console.log(error);
    }
}