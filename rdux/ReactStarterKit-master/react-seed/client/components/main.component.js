import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{
    render(){
        return(<div>
                    <h1>Using Routes</h1>
                    {React.cloneElement(this.props.children,this.props)}
                    
            </div>

                )
    }
}


                    //{React.cloneElement({this.props.children},this.props)}
                    //this is making store data available to children of main Component
                    // it is binding this 'this.props' to 'this.props' of 'AlbumComponent' or 'PhotoComponent'