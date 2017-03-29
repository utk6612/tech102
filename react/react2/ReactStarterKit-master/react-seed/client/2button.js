import React from 'react';

            export class ButtonComponent extends React.Component{
                constructor(props){
                    super(props);
                this.state={
                    counter:this.props.initialCount
                }
                }
                incrementCount(){
                    this.setState({counter:this.state.counter+1});
                }
                render(){
                    return(<button type="button" onClick={this.incrementCount.bind(this)} className="btn btn-primary">{this.state.counter}</button>)
                }
            };