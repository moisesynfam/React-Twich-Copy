import { FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM } from "../actions/types";
import _ from 'lodash';

export default ( streams = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            const { stream } = action.payload;
            return { ...streams, [stream.id]: stream};
        case FETCH_STREAMS: 
            return {...streams, ..._.mapKeys(action.payload.streams, 'id')};
        case DELETE_STREAM: 
            return _.omit(stream, action.payload.streamId);
        
    
        default:
            return streams;
    }
}