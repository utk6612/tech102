import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonComponent} from './button';

            class ButtonListComponent extends React.Component{
                constructor(props){
                    super(props);
                this.state={
                    buttonList:[10,20,30,40]
                }
                }
                render(){
                    var buttontoBeCreated=this.state.buttonList.map(function(item,key){
                    return <ButtonComponent initialCount={item}/>
                    });
                    return(<div>
                            {buttontoBeCreated}
                        </div>);
                }
            };
             ReactDOM.render(<ButtonListComponent />,document.querySelector("#content"));