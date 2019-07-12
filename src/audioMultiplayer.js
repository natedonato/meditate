import React from 'react';

class AudioSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            play: false,
            sounds: {
                birds: true,
                rain: true,
                ocean: true,
            }
        };

        this.birds = new Audio('./audio/birds.mp3');
        this.birds.volume = "0.8";
        this.rain = new Audio('./audio/rain.ogg');
        this.ocean = new Audio('./audio/ocean.wav');

        this.togglePlay = this.togglePlay.bind(this);

    }


    togglePlay(){
        if(this.state.play){
            Object.keys(this.state.sounds).forEach(sound => {
                this[sound].pause();
            });
            this.setState({play: false});
        }else{
            Object.keys(this.state.sounds).forEach(sound => {
                if(this.state.sounds[sound]){
                    this[sound].play();
                }
            });
            this.setState({play: true});
        }
    }

    render(){
        return(
        <div>
            <button onClick={this.togglePlay}>{this.state.play ? "pause" : "play"} </button>
        </div>
        )
    }
}

export default AudioSelector;