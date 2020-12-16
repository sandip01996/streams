
import React, { createRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream ,editStream } from '../../actions';
import Streamform from  './StreamForm';

class StreamUpdate extends React.Component{
    
    componentDidMount(){
        
        this.props.fetchStream(this.props.match.params.id);
        

    }
    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
      };
   
    render(){
        const {stream}=this.props;

        
        
       // const uStream=streams.find(stream=>stream.id == match.params.id);
        
        console.log(stream);
       
        if (!stream){

            return <div>Loading</div>;
        }else{
      
        return (
          <div>
             
              <h2>Edit a Stream</h2>
              <Streamform initialValues={_.pick(stream,'title','description')} 
              onSubmit={this.onSubmit}/>
          </div>
        );
        }
       
       

       
    }
}
const mapStateToProps=(state,ownProps)=>{ 
    
     
    return {stream : state.streams[ownProps.match.params.id]
        // streams: Object.values(state.streams)
    };
}

export default connect(mapStateToProps,{fetchStream , editStream})(StreamUpdate);