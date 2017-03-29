import {connect} from 'react-redux';
import Main from './main.component';
import {bindActionCreators} from 'redux';

import * as actionCreators from '../actionCreaters/action';

function mapStateToProps(stateMeansStore){
    //connecting store to components
    return{
        myposts:stateMeansStore.posts,
        mycomments:stateMeansStore.comments,
    }
}


function mapDispatchToProps(dispatch){//connecting actionCreators to components
    return bindActionCreators(actionCreators,dispatch) //it binds all the action creators to dispatch .So, when action is called it dispatch is called.
}

var App=connect(mapStateToProps,mapDispatchToProps)(Main);
                //connnects to store and action creators as props in react
export default App;