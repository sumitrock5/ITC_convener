import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Img1 from './intel_chip-2560x1600.jpg';
import Img2 from './apple_galaxy-2560x1600.jpg';
import Img3 from './hacker_4k_8k-3840x2160.jpg';
let Img;

const TeamCard=({onRouteChange,num,teamname})=>{
    if(num===1){
        Img=Img1;
    }
    if(num===2){
        Img=Img2;
    }
    if(num===3){
        Img=Img3;
    }
    return(
            <Card style={{ width: '18rem',background: 'transparent' }} className="ma4">
                <Card.Body style={{ background: 'transparent' }} >
                    <Card.Title style={{fontSize:"2rem",height:"3rem"}}>Team {num}</Card.Title>
                    <Card.Img variant="top" src={Img} style={{width: 270,height: 150}} className="pa2 ma2 br2 shadow-2" />
                    <Card.Text style={{fontSize:"2rem",height:"3rem"}}>
                        {teamname}
                    </Card.Text>
                    <Button variant="primary" onClick={() => onRouteChange(num)}>View Team</Button>
                </Card.Body>
            </Card>
    )
}
export default TeamCard;