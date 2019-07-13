import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selection: 3,
            timer: ""
        };

    }

    toggleSelect(n){
        this.setState({selection: n});
    }

    render() {
        return (
            <div className="timer">
                <div onClick={()=>this.toggleSelect(2)} className={this.state.selection === 2 ? "selectedTimer" : ""}>2:00</div>
                <div onClick={() => this.toggleSelect(3)} className={this.state.selection === 3 ? "selectedTimer" : ""}>3:00</div>
                <div onClick={() => this.toggleSelect(5)} className={this.state.selection === 5 ? "selectedTimer" : ""}>5:00</div>
            </div>
        )
    }
}

export default Timer