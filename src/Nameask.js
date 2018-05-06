import React, {Component} from 'react';



class Nameask extends Component {
    render(){
        return(
            <div className='contener'>
                <h1>Welcome in 3digits game</h1>
                <form className='contener'>
                    <label>
                        what is your name?
                        <input id="name-input" type="text" />
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Nameask