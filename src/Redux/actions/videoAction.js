import {
    CHANNEL_DETAILS_FAIL,
    CHANNEL_VIDEOS_REQUEST,
    CHANNEL_VIDEOS_SUCCESS,
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    RELATED_VIDEO_FAIL,
    RELATED_VIDEO_REQUEST,
    RELATED_VIDEO_SUCCESS,
    SEARCHED_VIDEO_FAIL,
    SEARCHED_VIDEO_REQUEST,
    SEARCHED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SUBSCRIPTIONS_CHANNEL_FAIL,
    SUBSCRIPTIONS_CHANNEL_REQUEST,
    SUBSCRIPTIONS_CHANNEL_SUCCESS,
 } from '../actionTypes'
 
 import request from '../../Api'
 
 export const getPopularVideos = () => async (dispatch, getState) => {
    try {
       dispatch({
          type: HOME_VIDEOS_REQUEST,
       })
       const { data } = await request('/videos', {
          params: {
             part: 'snippet,contentDetails,statistics',
             chart: 'mostPopular',
             regionCode: 'NG',
             maxResults: 20,
             pageToken: getState().homeVideos.nextPageToken,
          },
       })
       console.log(data)
 
       dispatch({
          type: HOME_VIDEOS_SUCCESS,
          payload: {
             videos: data.items,
             nextPageToken: data.nextPageToken,
             category: 'All',
          },
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: HOME_VIDEOS_FAIL,
          payload: error.message,
       })
    }
 }


 export const getVideosByCategory = (keyword) => async (dispatch, getState ) => {
    try {
       dispatch({
          type: HOME_VIDEOS_REQUEST,
       })
       console.log(keyword)
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             
             maxResults: 20, 
             pageToken: getState().homeVideos.nextPageToken,
             type:"video",
             q:keyword
          },
       })
       console.log(data)
 
       dispatch({
          type: HOME_VIDEOS_SUCCESS,
          payload: {
             videos: data.items,
             nextPageToken: data.nextPageToken,
             category: keyword,
          },
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: HOME_VIDEOS_FAIL,
          payload: error.message,
       })
    }
 }

export const getVideoById = (id) => async (dispatch) =>{
   dispatch({
       type:SELECTED_VIDEO_REQUEST
   })
   try{
      const {data} = await request("/videos" , {
         params:{
            part:"snippet,statistics",
            id:id
         }
      })
   
       dispatch({
          type:SELECTED_VIDEO_SUCCESS,
          payload:data.items[0],
   
       }) 
   }
   catch(error){
       dispatch({
          type:SELECTED_VIDEO_FAIL,
          payload:error.message
       })
   }
  

}



export const getRelatedVideos = (id) => async (dispatch) =>{
   dispatch({
       type:RELATED_VIDEO_REQUEST
   })
   console.log(id)
   try{
      const {data} = await request("/search" , {
         params:{
            part: 'snippet',
            relatedToVideoId: id,
            maxResults: 15,
            type: 'video',
           
         }
      })
      console.log(data)
   
       dispatch({
          type:RELATED_VIDEO_SUCCESS,
          payload:data.items,
   
       }) 
   }
   catch(error){
      console.log(error)
       dispatch({
          type:RELATED_VIDEO_FAIL,
          payload:error.message
       })
   }
  

}
export const getVideosBySearch = keyword => async dispatch => {
   try {
      dispatch({
         type: SEARCHED_VIDEO_REQUEST,
      })
      const { data } = await request('/search', {
         params: {
            part: 'snippet',

            maxResults: 20,
            q: keyword,
            type: 'video,channel',
         },
      })

      dispatch({
         type: SEARCHED_VIDEO_SUCCESS,
         payload: data.items,
      })
      console.log(data.items)
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: SEARCHED_VIDEO_FAIL,
         payload: error.message,
      })
   }
}















