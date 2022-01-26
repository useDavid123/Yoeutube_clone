import React,{useState , useEffect} from 'react'
import "./_comments.scss"
import Comment from "../comment/Comment"
import {useDispatch , useSelector} from "react-redux"
import { getCommentsOfVideoById ,addComment } from '../../Redux/actions/commentAction'
const Comments = ({videoId , totalComments}) => {
    const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCommentsOfVideoById(videoId))
   }, [videoId, dispatch])

   const comments = useSelector(state => state.commentList.comments)
   const { photoURL } = useSelector(state => state.auth?.user)

   const [text, setText] = useState('')

   const _comments = comments?.map(
      comment => comment.snippet.topLevelComment.snippet
   )

   const handleComment = e => {
      e.preventDefault()
      if (text.length === 0) return

      dispatch(addComment(videoId, text))

      setText('')
   }
  
    return (
        <div className="comments">
           <p>{totalComments} Comments</p>
           <div className="comments__form d-flex w-100 my-2">
               
                    
                    <img src={photoURL} alt="" className="rounded-circle mr-3"/>
                    <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
                  value={text}
                  onChange={e => setText(e.target.value)}
               />
               <button className='p-2 border-0'>Comment</button>
            </form>  
               
           </div>
           <div className="comment__list">
               {_comments?.map((comment , index)=>(
                   <Comment comment={comment} key={index} />
               ))}
           </div>
        </div>
    )
}

export default Comments
