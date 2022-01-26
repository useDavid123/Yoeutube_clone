import React,{useEffect} from 'react'
import "./_videoMetaData.scss"
import moment from "moment"
import numeral from "numeral"
import {MdThumbUp , MdThumbDown} from "react-icons/md"
import ShowMoreText from "react-show-more-text"
import { useDispatch , useSelector } from 'react-redux'
import { getChannelDetails } from '../../Redux/actions/channelAction'
import {checkSubscriptionStatus} from "../../Redux/actions/channelAction"

const VideoMetaData = ({video:{
    snippet,
    statistics}
    ,
    videoId
}) => { 
    const {channelId , channelTitle , description , title ,publishedAt} = snippet
    const {viewCount , likeCount , dislikeCount} = statistics
     const dispatch = useDispatch() 
     const {snippet:channelSnippet , statistics:channelStatistics}= useSelector(state=>state.channelDetails.channel)
     const subscriptionStatus = useSelector(
        state => state.channelDetails.subscriptionStatus
     )
 useEffect(()=>{
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscriptionStatus(channelId))
 },[channelId , dispatch])
 console.log(likeCount)
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
          <h5>{title}</h5>
          <div className="py-1 d-flex justify-content-between align-items-center">
              <span>
                  { numeral(viewCount).format("0.a") } views .
                      
                        {  moment(publishedAt).fromNow() }
                  
              </span>
         
           <div>
                <span className="mr-3">
                    <MdThumbUp size={26} />{" "}
                    {numeral(likeCount).format("0.a")}
                </span>
                <span className="mr-3">
                    <MdThumbDown size={26} />{" "}
                    {numeral(dislikeCount).format("0.a")}
                </span>
           </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
               <div className="d-flex">
                   <img src={channelSnippet?.thumbnails?.default?.url} alt="" className="rounded-circle mr-3"/>
                   <div className="d-flex flex-column">
                       <span>{channelTitle}</span>
                       <span> {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '}
                     Subscribers</span>
                   </div>
               </div>
               <button
               className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
            </div>
            <div className="videoMeta__description">
                <ShowMoreText
                lines={3}
                less="SHOW LESS"
                more="SHOW MORE"
                anchorClass="showMoreText"
                expanded={false}
                >
                {description}
            
            </ShowMoreText>
            </div>
            </div>

           
        </div>
    )
}

export default VideoMetaData
