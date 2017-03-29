// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Main from './components/main.component';
import AlbumComponent from './components/album.component';
import Photo from './components/photo.component';
import store from './store';
import App from './components/MainScript';
import css from './styles/style.styl';
//Provider is to inject store 
var router=(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={AlbumComponent}></IndexRoute>
                    <Route path="/view/:id" component={Photo}></Route>
                </Route>
            </Router>
            </Provider>
);

ReactDOM.render(router,document.getElementById('root'));