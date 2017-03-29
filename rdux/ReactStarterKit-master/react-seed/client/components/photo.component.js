import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDetails from './photoDetails.component';

export default class Photo extends React.Component{
    render(){

        var code=this.props.params.id;//it can access the url and finds id
        const index=this.props.myposts.findIndex((post)=>{
            return post.code === code});
        const currPost=this.props.myposts[index];
        return(<div>
                    <PhotoDetails post={currPost} {...this.props} i={index}/>
            </div>

                )
    }
}