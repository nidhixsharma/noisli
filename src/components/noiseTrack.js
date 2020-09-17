import React  from 'react';
import './noiseTrack.css';



const NoiseTrack = (props) =>{
     let audio = new Audio(props.src);

      const playAudio = () => {                 
                 audio.volume = props.volume   
                 audio.play();         
        }

      const pauseAudio = () => {
         audio.pause();
      }

       const audioStatus = props.isPlaying ? playAudio() : pauseAudio();
     
    return (            
       <div 
       >             
               <i className="fa fa-soundcloud fa-3x" aria-hidden="true" onClick={playAudio}   />
               <p onClick ={pauseAudio}> {props.name}</p> 
                {audioStatus} 
                {/* { props.isPlaying ? audio.play() : audio.pause() }   */}
       </div>    
    );
}
export default NoiseTrack;