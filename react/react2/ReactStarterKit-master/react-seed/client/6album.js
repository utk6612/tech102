import React from 'react';
import ReactDOM from 'react-dom';
import PhotoComponent from './6photo';
import FormComponent from './6forms';

export default class AlbumComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            photoID:[1,2,3,4]
        }
    }
    update(txt){
        this.setState({photoID:this.state.photoID.concat(txt)});
    }
    componentWillMount(){
        $.get('http://jsonplaceholder.typicode.com/photos/',(response)=>{
           sessionStorage.setItem("response", JSON.stringify(response));
        })
    }

    deleteItem(txt){
        
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
            <FormComponent updateform={this.update.bind(this)} deleteform={this.deleteItem.bind(this)} />
            {getPhotos}
            </div>
        );

    }
} 