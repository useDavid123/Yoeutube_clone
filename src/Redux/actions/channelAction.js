import request from '../../Api'
import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST,
    SET_SUBSCRIPTION_STATUS, CHANNEL_DETAILS_SUCCESS } from '../actionTypes'

export const getChannelDetails = (id) => async (dispatch) =>{
    dispatch({
        type:CHANNEL_DETAILS_REQUEST
    })
    try{
       const {data} = await request("/channels" , {
          params:{
             part:"snippet,statistics,contentDetails",
             id:id
          }
       })
    
        dispatch({
           type:CHANNEL_DETAILS_SUCCESS,
           payload:data.items[0],
    
        }) 
    }
    catch(error){
        dispatch({
           type:CHANNEL_DETAILS_FAIL,
           payload:error.response.data,
        })
    }
}



export const checkSubscriptionStatus = id => async (dispatch, getState) => {
    try {
       const { data } = await request('/subscriptions', {
          params: {
             part: 'snippet', 
             forChannelId: id,
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: SET_SUBSCRIPTION_STATUS,
          payload: data.items.length !== 0,
       })
       console.log(data)
    } catch (error) {
       console.log(error.response.data)
    }
 }
 