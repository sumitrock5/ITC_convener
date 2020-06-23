import React,{Component} from 'react';
import Img from './intel_chip-2560x1600.jpg';
import Image from 'react-bootstrap/Image';
const initialState = {
    teams:[]
  };


class Team1 extends Component {
    constructor() {
      super();
      this.state=initialState;
    }
    componentDidMount(){
        fetch('http://localhost:8000/polls/'+this.props.teamid)
        .then(response=>response.json())
        .then(response=>{
            this.setState({teams:response})
        })
        .catch(console.log);
    }

    teamDisplay=()=>{
        let s=[];
        this.state.teams.forEach(element => {
            s.push(<h4>{element.team_member}</h4>);
        });

        return s;
        // return this.state.team[x];
    }
    
    render(){
        const {teamid,teamname}=this.props;
        return(
            <div>
                <h1 style={{textDecoration:"underline"}}>Team 1</h1>
                <Image src={Img} alt="teampic" style={{width: 500,height: "auto"}} className="pa4 ma3 br2 shadow-2"/>
                <h2>Team Name:{teamname}</h2>
                <h2>Team ID:{teamid}</h2>
                <h3>Team Members:</h3>
                <div style={{textAlign:"left"}} className="pa2 pl5 ma3">    
                    {
                            this.teamDisplay()
                    }
                </div>
            </div>
        );
    }
}
export default Team1;