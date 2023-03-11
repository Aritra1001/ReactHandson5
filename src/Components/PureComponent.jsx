import React,{PureComponent} from 'react';


class Display extends PureComponent{
    constructor(){
        super();
        this.state={
            value: 10
        }
    }
    render(){
        console.log(this.state);
        return(
            <>
                <h1 className='count'>Pure Component {this.state.value}</h1>
                <button type='button' onClick={()=>{this.setState({value:20})}}>Update State</button>
            </>
        )
    }
}
export default Display;