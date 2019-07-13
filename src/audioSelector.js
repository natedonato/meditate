import React from 'react';
import Timer from './timer';

class AudioSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            play: false,
            selection: "ocean"
        };

        this.birds = new Audio('./audio/birds.mp3');
        this.birds.volume = "0.8";
        this.rain = new Audio('./audio/rain.ogg');
        this.ocean = new Audio('./audio/ocean.wav');
        this.prayer = new Audio('./audio/prayer.mp3');
        this.birds.loop = true;
        this.rain.loop = true;
        this.ocean.loop = true;
        this.prayer.loop = true;



        this.togglePlay = this.togglePlay.bind(this);

    }

    toggleSelection(choice, e){
        this.props.changeBg(choice);
        if(!this.state.play) {
            this.setState({selection: choice});
        }else{
            this.togglePlay();
            this.setState({selection: choice}, () => this.togglePlay()
            );
        }
    }

    togglePlay(){
        if(this.state.play){
            if(this.state.selection){
                this[this.state.selection].pause();
            }
            this.setState({play: false});
        }else{
            if(this.state.selection){
                this[this.state.selection].play();
            }
            this.setState({play: true});
        }
    }

    render(){
        return(
        <>
        <div className = "audioSelector">
            <div style={{color: "red"}}className={this.state.selection === null ? "selected" : "unselected"} onClick={(e) => this.toggleSelection(null, e)} > Mute </div>
            <div className={this.state.selection === "rain" ? "selected" : "unselected"} onClick={(e) => this.toggleSelection("rain", e)} > Rain </div>
            <div className={this.state.selection === "ocean" ? "selected" : "unselected"} onClick={(e) => this.toggleSelection("ocean", e)} > Ocean </div>
            <div className={this.state.selection === "birds" ? "selected" : "unselected"} onClick={(e) => this.toggleSelection("birds", e)} > Birds </div>
            <div className={this.state.selection === "prayer" ? "selected" : "unselected"} onClick={(e) => this.toggleSelection("prayer", e)} > Gongs </div>

            </div>

            <Timer togglePlay={this.togglePlay}/>

            {/* <button onClick={this.togglePlay}>{this.state.play ? "pause" : "play"} </button> */}
        </>
        )
    }
}

export default AudioSelector;