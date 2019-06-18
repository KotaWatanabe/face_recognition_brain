import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles:{
    number:{
      value:80,
      density:{
        enable: true,
        value_area:1000
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:"",
      imageUrl:""
    }
  }
  onInputChange = (event) => { 
    this.setState=({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        {
        <FaceRecognition imageUrl={this.state.imageURl}/>}
      </div>
    );
  }
}

export default App;
