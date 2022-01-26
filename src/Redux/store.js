import {composeWithDevTools} from "redux-devtools-extension";
import {createStore , applyMiddleware , combineReducers} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { homeVideosReducer , relatedVideoReducer, searchedVideosReducer } from "./reducers/videoReducer";
import {selectedVideoReducer} from "./reducers/videoReducer"
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentListReducer } from "./reducers/commentReducer";
 

const rootReducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideosReducer

})

// const reducer = (initialState) => initialState


 const store = createStore(
     rootReducer,
    {} ,
    composeWithDevTools(applyMiddleware(thunk)))
 export default store

