import React, {useEffect, useState} from 'react'
import './App.css';
import Videos from './pages/videos'
import db from './config/firebase'
import {collection, getDocs} from 'firebase/firestore/lite'
import { Pix } from '@mui/icons-material';


function App () {
let maxHeight;
if(window.innerHeight <= 800){
  maxHeight = window.innerHeight
}


  const [videos, setVideos] = useState([])

  async function getVideos (){
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)

  }

  useEffect (()=>{
    getVideos ();
    
  },[])

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app__videos'>
        {videos.map((item) => {
          return (
            
            <Videos
        comments={item.comments}
        description={item.description}
        likes={item.likes}
        music={item.music}
        name={item.name}
        shares={item.shares}
        url={item.url}
        />
  
          )

        }) }
       

      </div>
      </div>
);

  }

   export default App;
