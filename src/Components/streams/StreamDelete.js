import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import history from '../../history';

import { Link } from 'react-router-dom';

import { deleteStream,fetchStream } from '../../actions';
class StreamDelete extends React.Component{
   
  componentDidMount(){
     // console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  
    
    actions=(
       <React.Fragment>      
           <button onClick={()=>this.props.deleteStream(this.props.match.params.id)}
          className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
        </React.Fragment>
     )

     renderContent(){
       const {stream}=this.props;
       if(!stream){
           return 'Are You Sure Want To Delete this stream ?'
       }else{

       return `Are you sure want to delete this stream : ${stream.title}`
       }

     }
     render(){
        // const {stream}=this.props;
         console.log(this.props);
    return (
        <Modal title='Stream Delete'
          content={this.renderContent()}
            actions={this.actions}
            onDismiss={()=>history.push('/')}
         />
    );
     }
}

const mapStateToProps=(state,ownProps)=>{

    return{stream : state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{deleteStream,fetchStream})(StreamDelete);   