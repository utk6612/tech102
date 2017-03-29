import React from 'react';
import ReactDOM from 'react-dom';
import PhotoComponent from './5photo';

export default class AlbumComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            photoID:[1,2,3,4]
        }
    }
    update(){
        var txt=ReactDOM.findDOMNode(this.refs.photoNum);
        this.setState({photoID:this.state.photoID.concat(txt.value)});
    }
    componentWillMount(){
        $.get('http://jsonplaceholder.typicode.com/photos/',(response)=>{
           sessionStorage.setItem("response", JSON.stringify(response));
        })
    }

    deleteItem(){
        let txt=ReactDOM.findDOMNode(this.refs.photoNum).value
        let newState=this.state.photoID.filter((item)=>{
            return item!=txt;
        })
        this.setState({photoID:newState});
    }
    render(){

        //console.log(JSON.parse(sessionStorage.getItem("response"))[1]);

        var getPhotos=this.state.photoID.map((item,index) => {
        return <PhotoComponent item={JSON.parse(sessionStorage.getItem("response"))[item]} 
        key={Math.random() * this.state.photoID.length}/>
        });
        return(
            <div>
            <input type="number" ref="photoNum"/>
            <input type="button" onClick={this.update.bind(this)} value="Add Photo"/>
            <input type="button" onClick={this.deleteItem.bind(this)} value="Delete"/>
            {getPhotos}
            </div>
        );

    }
} 