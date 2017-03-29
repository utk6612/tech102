import React from 'react';
export default class PhotoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url:this.props.item.url,
            title:this.props.item.title
        };
    }

  /*  componentDidMount(){
        $.get('http://jsonplaceholder.typicode.com/photos/'+this.state.itemValue,(response)=>{
            this.setState(response);
        })
    }*/
    render(){
        return(<div>
            <img src={this.state.url} height="100" width="100"/>
            {this.state.title}
            </div>
        );
    }
}