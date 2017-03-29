import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDetails from './photoDetails.component';

export default class AlbumComponent extends React.Component{
    render(){
        return(<div>
                    <h1>Albums here..</h1>
                    {this.props.myposts.map((item,index)=>{
                        return <PhotoDetails post={item} i={index} key={index} {...this.props}/>
                    })}
            </div>

                )
    }
}