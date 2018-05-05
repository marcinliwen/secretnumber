import React, {Component} from 'react';




class Nameform extends Component{
    render(){
        return(
        <form className='contener'>
            <label>
                what is your name?
                <input id="name-input" type="text" />
            </label>
                <input type="submit"/>
            
        </form>
        );
    }
}
export default Nameform;