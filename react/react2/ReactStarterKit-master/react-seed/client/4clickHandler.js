import React from 'react';
import ReactDOM from 'react-dom';

export default class FormsClickComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={courseName:""};
        this.onClickHandler=this.onClickHandler.bind(this);
    }
    onClickHandler(){
        this.setState({courseName:ReactDOM.findDOMNode(this.refs.targetValue).value});
    }
    componentWillMount(){
        console.log('componentWillMount called!');
    }

    componentDidMount(){
        console.log("componentDidMount called!");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true;
    }

    componentWillUpdate(){
        console.log("Component Will Update called!");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called!");
    }

//when render to called it converts virtual DOM to real DOM
    render(){
        console.log("Render Called")
        return (
            <form>
                <label>Course Name:</label>
                <input type="text" ref="targetValue"/>
                <input type="button" onClick={this.onClickHandler} value="Add Course"/>   
                <label>{this.state.courseName}</label>
            </form>
        )
    }

}