import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyD2X2pMlKfUS9ld7NP4i52OjgmsoRvXWig',
      
   },
})

export default request