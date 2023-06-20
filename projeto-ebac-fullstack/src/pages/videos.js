import React,{useRef, useState} from 'react'
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar"
import "./videos.css"

function Videos({name, description, music, likes, comments, shares, url}) {

    const videoRef= useRef(null)
    const [play, setPlay]= useState(false)

    function handdleSart() {
        if(play) {
            videoRef.current.pause();
            setPlay(false) 
        }
        else{
            videoRef.current.play();
            setPlay(true)
        }
    }
    return(
        
        <div className='video'>
            <video 
            
            className='video__player'
            ref={videoRef}
            onClick={handdleSart}
            loop
            src={url}
            
            >
    
            </video>
            <VideoSidebar 
            likes={likes}
            comments={comments}
            shares={shares}
            />

            <VideoFooter 
            name={name}
            description={description}
            music={music}
            />
            </div>
    )
}




export default Videos