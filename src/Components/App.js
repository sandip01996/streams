import React from 'react';
import { Router,Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamUpdate from './streams/StreamUpdate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


class App extends React.Component{

    render(){

       return(
           <div className='ui container'>
              
               <Router history={history}>
               <div>
                   <Header/>
                   <Route path='/' exact component={StreamList}/>
                   <Route path='/streams/new' exact component={StreamCreate}/>
                   <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                   <Route path='/streams/update/:id' exact component={StreamUpdate}/>
                   <Route path='/streams/show/:id' exact component={StreamShow}/>
              </div>
             </Router>
           </div>
       );
    }

}

export default App;