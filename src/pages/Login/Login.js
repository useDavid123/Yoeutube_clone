import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import "./_login.scss"
import {useDispatch, useSelector}   from "react-redux"
import {login} from  "../../Redux/actions/authAction";

const Login = () => {
    const dispatch = useDispatch();
   const navigate = useNavigate()

  const accessToken = useSelector(state=>state.auth.accessToken)
  console.log(accessToken)

    const handleLogin = () => {
        dispatch(login());
    }

    useEffect(()=>{
       if(accessToken){
       navigate("/")
       }
    },[accessToken , navigate])

    return (
        <div className="login">
             <div className="login__container">
             <img
             src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
             alt=""
             />
             <button onClick={handleLogin}>login with google</button>

             </div>
        </div>
    )
}

export default Login
