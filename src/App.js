import React, { useState, useEffect } from 'react'
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login"
import {Container} from "react-bootstrap"
import "./_app.scss"
import {  Route  , Routes , useNavigate}  from "react-router-dom"
import { useSelector } from 'react-redux';
import Watch from "./pages/watch/Watch"
import Search from "./pages/Search/Search"
function App() {
  const [sidebar , setSidebar] = useState(false)
  const handleToggleSidebar = () => setSidebar(!sidebar)
  const {accessToken , loading} = useSelector(state=>state.auth)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!accessToken && !loading){
       navigate("/auth")
    }
  },[accessToken , loading ,navigate ])

  const Element = ({children}) =>{
    return(
    <>
       <Header handleToggleSidebar={handleToggleSidebar} />
     <div className="app__container border border-info">
       <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}  />
       <Container fluid className="app__main border border-warning">
         {children}
       </Container>
     </div>
     </>
    )
  }
  return( <>
   
    
     <Routes>
         <Route path='/' exact element={<Element ><Home /></Element>} />
        

         <Route path='/auth' element={<Login />} />
           
       <Route path='/watch/:id' element={<Element><Watch /></Element>} />
           

          <Route path='/search/:query'
          element={<Element>
            <Search />
         </Element>}
          />
            
        
        

         {/* <Route path='/feed/subscriptions'>
            <Layout>
               <SubscriptionsScreen />
            </Layout>
         </Route>
         <Route path='/channel/:channelId'>
            <Layout>
               <ChannelScreen />
            </Layout>
         </Route>

         <Route>
            <Redirect to='/' />
         </Route>  */}
      </Routes>
     
      </>
   )
    
}

export default App
