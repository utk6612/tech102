import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonComponent} from './2button';

            class ButtonListComponent extends React.Component{
                constructor(props){
                    super(props);
                this.state={
                    buttonList:[10,20,30,40]
                }
                }

                addItem(){
                    let txt=ReactDOM.findDOMNode(this.refs.txtValueFromUser);/**
                    this will return all the ref elements from the DOM */
                    this.setState({buttonList:this.state.buttonList.concat(+(txt.value))});
                }
                render(){
                    var buttontoBeCreated=this.state.buttonList.map(function(item,key){
                    return <ButtonComponent initialCount={item}/>
                    });
                    return(<form className="form-inline">
                            <label htmlFor="txtEntry">Enter a number:</label>
                            <input type="text" className="form-control" ref="txtValueFromUser"></input>
                            <input type="button" onClick={this.addItem.bind(this)} className="form-control" value="Add"></input>
                            {buttontoBeCreated}          
                    </form>);
                }
            };
             ReactDOM.render(<ButtonListComponent />,document.querySelector("#content"));