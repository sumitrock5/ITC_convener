import React, { Component } from 'react';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import TeamCard from './Components/TeamCard/TeamCard';
import Team1 from './Components/Team1/Team1';
import Team2 from './Components/Team2/Team2';
import Team3 from './Components/Team3/Team3';
import './App.css';
import Particles from 'react-particles-js';


const particelOptions={
  particles: {
    number: {
      value: 100,
      density : {
        enable: true,
        value_area: 800
      }
    }
  }
};

const initialState = {
  team_no:0,
  team1:{},
  team2:{},
  team3:{}
};



class App extends Component {
  constructor() {
    super();
    this.state=initialState;
  }

  onRouteChange=(num)=>{
    this.setState({team_no:num});
  }
  

  componentDidMount(){
    fetch('http://localhost:8000/polls')
    .then(response=>response.json())
    .then(response=>{
        this.setState({team1:response[0],team2:response[1],team3:response[2]})
    })
    .catch(console.log);
  }


  teamfunc=(teamnum)=>{
    if (teamnum===0){
      return (
      <div className="card" style={{background: 'transparent' }} >  
        <TeamCard onRouteChange={this.onRouteChange} num={1} teamname={this.state.team1.team_name}/>
        <TeamCard onRouteChange={this.onRouteChange} num={2} teamname={this.state.team2.team_name}/>
        <TeamCard onRouteChange={this.onRouteChange} num={3} teamname={this.state.team3.team_name}/>
      </div>
      );
    }
    if(teamnum===1){
      return(
      <div className="card" style={{background: 'transparent' }} >  
        <Team1 teamid={this.state.team1.team_id} teamname={this.state.team1.team_name}/>
      </div>
      );
    }
    if(teamnum===3){
      return(
      <div className="card" style={{background: 'transparent' }} >  
        <Team3 teamid={this.state.team3.team_id} teamname={this.state.team3.team_name}/>
      </div>
      );
    }
    if(teamnum===2){
      return(
      <div className="card" style={{background: 'transparent' }} >  
        <Team2 teamid={this.state.team2.team_id} teamname={this.state.team2.team_name}/>
      </div>
      );
    }
  }



  render(){
    return (
      <div className='App'>
        <Particles className="particles" params={particelOptions} />
        <Navigation onRouteChange={this.onRouteChange}/>
        <br></br><br></br><br></br>
         {
          this.teamfunc(this.state.team_no)
        }
      </div>
    );
  }
}

export default App;
