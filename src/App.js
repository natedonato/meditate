import React from 'react';
import './App.css';
import beach from './images/beach.jpg';
import rain from './images/clouds.jpg';
import birds from './images/forest3.jpg';
import temple from './images/temple.jpg';
import mute from './images/sand.jpg';
import AudioSelector from './audioSelector';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {imageUrl: beach};

    this.changeBg = this.changeBg.bind(this);
  }

  changeBg(selection){
    switch(selection){
      case "ocean":
        this.setState({imageUrl: beach});
        break;
      case "rain":
        this.setState({ imageUrl: rain });
        break;
      case "birds":
        this.setState({ imageUrl: birds });
        break;
      case "prayer":
        this.setState({ imageUrl: temple });
        break;
      case null:
        this.setState({ imageUrl: mute });
        break;


    }
  };

  render(){
  return(
    <div className="App" style={{ backgroundImage: `url(${this.state.imageUrl})`}}>
      <h1>Meditate</h1>
      <p> Meditation has many clinically demonstrated health benefits and can be done right at your desk. </p>


        <AudioSelector changeBg={this.changeBg} />
    </div>
  )};
}

export default App;
