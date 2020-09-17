import React,{Component} from 'react';
import './App.css';
import NoiseTrack from './components/noiseTrack'; 
import VolumeSlider from './components/slider/slider2';

import soundFile1 from './assets/mp3/Processed_White_Noise.mp3';
import soundFile2 from './assets/mp3/Whitenoise.wav';

class App extends Component {

   state = {
      audioTrack :[{
        id:1,
        name: 'White-Noise.WAV',
        src: soundFile2, 
        vol : 0.5
      },
      {
        id:2,
        name: 'White-Noise.MP3',
        src: soundFile1,
        vol : 0.2
      }],
      isOnPlayingMode : false,
      isOnPauseMode : true,
      volume: 5
       }

    audio = new Audio();

    // playAudioHandler = () =>{
    //   if(this.state.isOnPlayingMode){
    //     this.audio.play();
    //        this.setState({
    //      isOnPlayingMode : false,
    //      isOnPauseMode  : true
    //    }) 
    //   }
    //     else {
    //       this.audio.pause();
    //                  this.setState({
    //        isOnPlayingMode : true,
    //        isOnPauseMode  : false
    //      })
    //     }
    //   }
    

  //  playAudioHandler = () => {
  //     this.setState({
  //        isOnPlayingMode : true,
  //        isOnPauseMode  : false
  //      })         
  //   }


  //    pauseAudioHandler = () => {
  //          this.setState({
  //          isOnPlayingMode : false,
  //          isOnPauseMode  : true
  //        })         
  //     }


    playPauseToggleHandler =() =>{
      console.log(`state b4 handler ${this.state.isOnPlayingMode}`);
      const toggledIsPlaying = this.state.isOnPlayingMode ? false : true;
       this.setState({
        isOnPlayingMode :toggledIsPlaying
      })
     
    }   

    changeVolumeSliderHandler = (event) => {
      event.preventDefault();
      this.setState(prevState => ({
        ...prevState,
        audioTrack:{
          ...prevState.audioTrack,
          vol : event.target.value
        }
      }))

      console.log('from change handler' + this.state.audioTrack.vol)
    }     


  render() {   
    return (
    <div className="App">
      <header className="App-header">
       Noisli
      </header>
      <div className="App-container">
          {this.state.audioTrack.map((audio) => {
          return (
            <div className ="NoiseTrack" key = {audio.src} >
              <NoiseTrack  
              name={audio.name} 
              src= {audio.src} 
              volume ={audio.vol}
              click = {this.playPauseToggleHandler}  
              isPlaying ={this.state.isOnPlayingMode}
               />
            <VolumeSlider change = {this.changeVolumeSliderHandler} value={this.state.audioTrack[0].vol} />
              </div>
             );                
      })} 
    </div> 
    </div>
  );
}
}
export default App;
