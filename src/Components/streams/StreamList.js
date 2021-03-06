import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fecthStreams } from '../../actions';

import history from '../../history';

class StreamList extends  React.Component{
  
     componentDidMount(){

      this.props.fecthStreams();
     }

     renderAdmin=stream=>{
       if(stream.userId===this.props.currentUserID){

        return <div className='right floated content'>
          <Link to={`streams/update/${stream.id}`} className='ui button primary'>
            Edit
          </Link>
          <Link to={`streams/delete/${stream.id}`}className='ui button red'>
            Delete
          </Link>
        </div>
       }
     }
    

     renderList(){
      return this.props.streams.map(stream=>{
         return(
          <div  className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
           <div className='header'>
             <Link to={`/streams/show/${stream.id}`}>
             {stream.title}
             </Link>
             </div>
      <div className='description'>{stream.description}</div>
          </div>
        </div>
         );
       });
     }

     renderCreate(){
       if(this.props.isSignedIn){
       return (
         <div style={{textAlign :'right'}}>
           <Link to='/streams/new' className='ui button primary'>
             Create Stream
           </Link>
         </div>
       );
       }
     }

    render(){
      console.log(this.props.streams);
    return (
      <div>
      <h2>Streams</h2>
      <div className='ui celled list'>
      {this.renderList()}
      </div>
      {this.renderCreate()}
      </div>
    )
    }

}

const mapStateToProps=state=>{

    return {streams:Object.values(state.streams),
            currentUserID : state.auth.userId,
            isSignedIn : state.auth.isSignedIn
          };

}

export default connect(mapStateToProps,{fecthStreams})(StreamList);