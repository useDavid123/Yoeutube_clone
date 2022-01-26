import React , {useEffect} from 'react'
import {Container , Col  } from "react-bootstrap"
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from "../../components/video/Video"
import {useDispatch , useSelector} from "react-redux"
import {getPopularVideos, getVideosByCategory} from "../../Redux/actions/videoAction"
import InfiniteScroll from "react-infinite-scroll-component"
import SkeletonVideos from '../../components/skeleton/SkeletonVideos'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{

      dispatch(getPopularVideos())


    },[dispatch , getPopularVideos])
   const {videos , activeCategory,loading} = useSelector(state=>state.homeVideos)

    const fetchData = () =>{

        if(activeCategory === "All"){
            dispatch(getPopularVideos())
        }
       else{
           dispatch( getVideosByCategory(activeCategory))
       }
    }


    return (
        <Container>
            <CategoriesBar />
            
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
            {!loading
               ? videos.map((video , index) => (
                    <Col lg={3} md={4} key={index} >
                       <Video video={video}  />
                    </Col>
                 ))
               : 
             [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                      <SkeletonVideos/>
                      
                    </Col>
                 ))
               }
         </InfiniteScroll>
           
        </Container>
    )
}

export default Home
