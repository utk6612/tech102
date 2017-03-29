import React from 'react';

export default class FormsComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={courseName:""};
        this.onChangeHandler=this.onChangeHandler.bind(this);
    }
    onChangeHandler(event){
        this.setState({courseName:event.target.value});
        //after setState shouldComponentUpdate() is called!
        /*setState get updated after shouldComponentUpdate() so we can use arguments in shouldComponentUpdate
        to use the latest value */
        //arguments contains all the state variables!
    }
        componentWillMount(){
        console.log('componentWillMount called!');
    }

    componentDidMount(){
        console.log("componentDidMount called!");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        console.log(arguments);
        console.log(this.state.courseName);
        if(arguments[1].courseName.length>10)
        return false;
        else
        return true;
    }

    componentWillUpdate(){
        console.log("Component Will Update called!");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called!");
    }
    render(){
        console.log("Render called");
        return (
            <form>
                <label>Course Name:</label>
                <input type="text" onChange={this.onChangeHandler}/>
                <label>{this.state.courseName}</label>
            </form>
        )
    }

}