import React, {Component} from 'react';




class Nameform extends Component{
    constructor(props){
        super(props);
        this.state = {name: ''}
    }
    namePrint(event){
        this.setState({name : event.target.value})
    }
    render(){
        return(
        <div className='contener'>
            <div className='contener'>
                <h1>Welcome in 3digits game</h1>
            </div>
            <form className='contener' >
                <label>
                    what is your name?
                    <input type="text" onChange={this.namePrint.bind(this)}/>
                </label>
                    
                    <div>{this.state.name}</div>
            </form>
            <div id='print-name'>
                
            </div>
        </div>
        );
    }
    
    
}
export default Nameform;