import React from 'react';
import ReactDOM from 'react-dom';

export default class FormComponent extends React.Component{
    constructor(props){
        super(props);
       this.state={}; 
    }
    updateForm(){
        let txt=ReactDOM.findDOMNode(this.refs.photoNum);
        this.props.updateform(txt.value);
    }
    deleteItemForm(){
        let txt=ReactDOM.findDOMNode(this.refs.photoNum).value;
        this.props.deleteform(txt);
    }
    render(){
        return(
            <div>
            <input type="number" ref="photoNum"/>
            <input type="button" onClick={this.updateForm.bind(this)} value="Add Photo"/>
            <input type="button" onClick={this.deleteItemForm.bind(this)} value="Delete"/>
            </div>
        )
    }
}