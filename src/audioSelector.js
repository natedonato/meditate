import React from 'react';

class AudioSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            play: false
        };

        this.audio = new Audio('./audio/birds.mp3');

        this.togglePlay = this.togglePlay.bind(this);

    }


    togglePlay(){
        if(this.state.play){
            this.audio.pause();
        }else{
            this.audio.play();
        }
    }

    render(){
        return(
        <div>
            <button onClick={this.togglePlay} />
        </div>
        )
    }
}

export default AudioSelector;