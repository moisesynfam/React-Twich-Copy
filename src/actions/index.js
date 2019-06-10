import streamsApi from '../apis/streamsApi';
import { CREATE_STREAM, SIGN_IN, SIGN_OUT, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    
    const response = await streamsApi.post('/streams', { ...formValues, userId });
    const createdStream = response.data;
    dispatch({
        type: CREATE_STREAM,
        payload: {stream: createdStream}
    });
}

export const getStreams = () => async (dispatch) => {
    
    const response = await streamsApi.get(`/streams/`);
    const streams = response.data;
    dispatch({
        type: FETCH_STREAMS,
        payload: {streams}
    })
}

export const getStream = (id) => async (dispatch) => {
    
    const response = await streamsApi.get(`/streams/${id}`);
    const stream = response.data;
    dispatch({
        type: FETCH_STREAM,
        payload: {stream}
    });
}

export const editStream = (id, formValues) => async (dispatch) => {
    
    const response = await streamsApi.put(`/streams/${id}`, formValues);
    const stream = response.data;
    dispatch({
        type: EDIT_STREAM,
        payload: {stream}
    });
}

export const deleteStream = (id) => async (dispatch) => {
    
    await streamsApi.delete(`/streams/${id}`);
    
    dispatch({
        type: DELETE_STREAM,
        payload: {streamId: id}
    });
}