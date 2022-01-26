import React ,{useState} from 'react'
import { getVideosByCategory } from '../../Redux/actions/videoAction'
import "./_categoriesBar.scss"
import { useDispatch } from 'react-redux'
const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]

const CategoriesBar = () => {
    const dispatch = useDispatch()
    const [activeElement , setActiveElement] = useState("All")
    const handleClick = (value) => {
        setActiveElement(value)
        dispatch(getVideosByCategory(value ))
    }
    return (
        <div className="categoriesBar">
          {
          keywords.map((value , index)=>(
              <span
               onClick={()=>handleClick(value)}
               className={activeElement === value ? "active" : ""}
              key={index}>{value}</span>
              
          ))
          }
        </div>
    )
}

export default CategoriesBar
