import React from 'react';

class TestComp extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return(
            <h1> hey </h1>
        )
    }
}

export default TestComp