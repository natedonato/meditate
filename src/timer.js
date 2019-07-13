import React from 'react';  

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selection: 3,
            started: false,
            currentTime: ""
        };


    }

    start(){
        if(this.state.started){
            clearInterval(this.state.interval);
            this.setState({started: false});
            this.props.togglePlay();
        }else{
            let currentTime = this.state.selection + ":00";
            this.setState({ started: true, currentTime: currentTime });
            this.startTimer(this.state.selection * 60);
            this.props.togglePlay();
        }
    }

    startTimer(duration, display) {
    let context = this;
    let timer = duration, minutes, seconds;
    let interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        context.setState({ currentTime: minutes + ":" + seconds});

        if (--timer < 0) {
            clearInterval(context.state.interval);
            context.start();
        }
    }, 1000);
    this.setState({interval: interval});
}


    toggleSelect(n){
        this.setState({selection: n});

    }

    render() {
        if(!this.state.started){
            return (
                <div className="timer">
                    <div onClick={()=>this.toggleSelect(2)} 
                    className={this.state.selection === 2 ? "selectedTimer" : ""}>2:00</div>
                    <div onClick={() => this.toggleSelect(3)} 
                    className={this.state.selection === 3 ? "selectedTimer" : ""}>3:00</div>
                    <div onClick={() => this.toggleSelect(5)} 
                    className={this.state.selection === 5 ? "selectedTimer" : ""}>5:00</div>
                    <br />
                    <button onClick={()=>this.start()}> Begin </button>
                </div>
            )
        }else{
            return(
            <div className="timer">

                <div>
                    
                    {this.state.currentTime}
                </div>

                <p>
                        Let go of the mouse and keyboard and just relax for a few minutes.
                </p>
                <br />
                    <button onClick={() => this.start()}> Pause </button>
            </div>
            )
        }
    }
}

export default Timer