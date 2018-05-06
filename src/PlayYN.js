import React, {Component} from 'react';
import Instruction from './Instruction';
import SecretNumber from './SecretNumber';

class PlayYN extends Component {
    constructor(){
        super();
        this.state = {
            message : 0,
            dblClick : 0,
            instVisible: false,
            playGroundVisible: false
        }
    }
    showInstruction(){
        this.setState(state =>({instVisible: !state.instVisible}))
    }
    playGame(){
        this.setState({instVisible: false})
        this.setState({playGroundVisible: true})
    }
    render(){
        const {inst} = this.props;
        return(
            <div className='contener'>
                <div className='contener title'>
                    <h2>Guess The Secret Number</h2>
                </div>
                <div className='contener'>
                    <button className="inst-button" onClick={this.playGame.bind(this)} >PLAY</button>
                </div>
                    {this.state.playGroundVisible && <SecretNumber />}
                <div  className='contener'id="instruction">
                    <button className="inst-button" onClick={this.showInstruction.bind(this)}>RULES</button>
                    {this.state.instVisible && <Instruction />}
                </div>
            </div>
        );
    }
    
}
export default PlayYN;