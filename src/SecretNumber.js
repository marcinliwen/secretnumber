import React, {Component} from 'react';



class SecretNumber extends Component{
    generateSecretNum (){
        var number = [];
        let i = 0;
        for(i; i < 3; i++){
            var newDigit = Math.floor(Math.random()*10);
            while(number.includes(newDigit)){
                newDigit = Math.floor(Math.random()*10);
            };
            number.push(newDigit);
        };
        return number;
    };
    handleChange(event){
        this.setState({value: event.target.value});
    };

    submitHandler(event){
        alert('Your number ' + this.state.value);
        this.setState({counter: this.state.counter + 1})
        event.preventDefault();
    }
    
    constructor(props) {
        super(props);
        this.state = {
            secretnumber: [],
            counter: 0,
            digits: 0,
            places: 0,
            value: null
        }
    }
    componentDidMount(){
        this.setState({
            secretnumber: this.generateSecretNum()
        })
    }
    render(){
        return(
            <div className='contener'>
                <div className='contener correct'><p>correct digits:</p><p>{this.state.digits}</p></div>
                <div className='contener correct'><p>correct places:</p><p>{this.state.places}</p></div>
                <div className='contener correct'><p>counter:</p><p>{this.state.counter}</p></div>
                <form id='form' onSubmit={this.submitHandler.bind(this)}>
                    <label>
                        gues the number:
                        <input id="number" type="text" size='3' maxLength='3' minLength='3' pattern='\d*' required value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <input type="submit"  />
                    </label>
                </form>
            </div>
        );
    }

}

export default SecretNumber;





