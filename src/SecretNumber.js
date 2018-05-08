import React, {Component} from 'react';
import Corrects from './Corrects';
import Youwin from './Youwin';



class SecretNumber extends Component{
    constructor(props) {
        super(props);
        this.state = {
            secretnumber: [],
            counter: 0,
            digits: 0,
            places: 0,
            value: '',
            usedNum: [],
            youWin: false,
            winerNum: 0

            
        }
    };
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
    checkNumber=(n)=>{
        this.setState({digits: 0});
        this.setState({places: 0});
        let q = this.state.secretnumber;
        n = n.split("");
        let i = 0;
        let d = 0;
        let p = 0;
        if(n.toString() == q.toString()){
            this.setState({youWin: true})
        }else{
            for (i; i < 3; i++){
                if(q.includes(parseInt(n[i]))){
                    d +=1;
                };
                if( parseInt(n[i]) == q[i]){
                    p += 1;
                }
                
            };
        };
        this.setState({digits: d});
        this.setState({places: p});
       
    };
    
    submitHandler(event){
        
        let num = this.state.value;
        this.checkNumber(num);
        this.setState({counter: this.state.counter + 1});
        this.setState({value: ''});
        this.setState({usedNum: this.state.usedNum +" "+ num});
        this.setState({winerNum: num})
        event.preventDefault();
        
    };
    
    reset(){
        this.setState({
            digits: 0,
            places: 0
        })
    }
    
    
    componentDidMount(){
        this.setState({
            secretnumber: this.generateSecretNum()
        })
    }
    render(){
        return(
            <div className='contener'>
                {this.state.youWin && <Youwin num={this.state.winerNum} count={this.state.counter}/>}
                <Corrects counter = {this.state.digits} title='digits' />
                <Corrects counter = {this.state.places} title='positions' />
                <div className='contener correct'><p>counter:</p><p>{this.state.counter}</p></div>
                <form id='form' onSubmit={this.submitHandler.bind(this)}>
                    <label>
                        gues the number:
                        <input id="number" ref={input => input && input.focus()} type="text"inputmode='numeric' size='3' maxLength='3' minLength='3'  pattern='\d*' required autocomplete="off" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <input type="submit" onClick={this.reset.bind(this)}/>
                    </label>
                </form>
                <div className='contener used-num'>{this.state.usedNum}</div>
            </div>
        );
    }

}

export default SecretNumber;





