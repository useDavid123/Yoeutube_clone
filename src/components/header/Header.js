import React,{useState} from 'react'
import "./_header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useNavigate } from 'react-router'

const Header = ({handleToggleSidebar}) => {
    const [search , setSearch] = useState("")
    const navigate = useNavigate()

 const   handleSubmit = (e) => {

     e.preventDefault()
     navigate(`/search/${search}`)
 }
    return (
        <div className=" header" >
          <FaBars className="header__menu" size={26}
          onClick={()=>handleToggleSidebar}
          />

          <img 
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="youtube"
          className="header__logo"
          />

          <form onSubmit={handleSubmit}>
              <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search"/>
              <button type="submit">
                  <AiOutlineSearch size={22} />
              </button>
          </form>
          <div className="heder__icons">
              <MdNotifications size={28}/>
              <MdApps size={23} />
          </div>
        </div>
    )
}

export default Header
