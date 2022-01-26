import React,{useEffect} from 'react'
import {Col , Row} from "react-bootstrap"
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import Comment from "../../components/comments/Comments"
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import "./_watch.scss"
import { useParams } from 'react-router'
import {useDispatch, useSelector} from "react-redux"
import { getRelatedVideos, getVideoById } from '../../Redux/actions/videoAction'
import Skeleton, { SkeletonTheme   } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
const Watch = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
      
    },[dispatch , id])


    const {video , loading} = useSelector(state=>state.selectedVideo)
     const {videos,loading:relatedVideosLoading} = useSelector(state=>state.relatedVideos)  
    return (
       <Row>
         <Col lg={8} >
          <div className="watch__player">
              <iframe src={`https://www.youtube.com/embed/${id}`}
               frameBorder="0"
               title={video?.snippet?.title}
               allowFullScreen
               width="100%"
               height="100%"
              >
                 
              </iframe>
          </div>
          {
              !loading ?   <VideoMetaData video={video} videoId={id}  /> : <h6>Loading...</h6>
          }
         
          <Comment videoId={id} totalComments={video?.statistics?.commentCount} />
         </Col>
         <Col lg={4}>
             {
                 !loading ?
                 (
                 videos?.filter(video => video.snippet)
                 .map((video)=>(
                     <VideoHorizontal video={video} key={video.id.videoId} />
                    // <h1>VideoHorizontal</h1>
                 ))
                 )
                 :
                 <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                     <Skeleton width="100%" height="150px" count={15} />
                     </SkeletonTheme>
             }
         </Col> 
       </Row>
    )
}

export default Watch
