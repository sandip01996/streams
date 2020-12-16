import React from 'react';
import flv from 'flv.js'
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component{
    
    constructor(props){
        super(props);
        console.log(this.props);
        this.videoref=React.createRef();
    }

   // console.log(props)
  componentDidMount(){
      const {id}=this.props.match.params;
      this.props.fetchStream(id);
   this.videoLoading();    
 
     
  }

  videoLoading=()=>{
   // console.log(this.videoplayer)
    const {id}=this.props.match.params;
    if(!this.props.stream || this.videoplayer){
        return ;
    }

    this.videoplayer= flv.createPlayer({
        type : 'flv',
        url : `http://localhost:8000/live/${id}.flv`
    });
    this.videoplayer.attachMediaElement(this.videoref.current);
    this.videoplayer.load();
  }

  componentDidUpdate(){
      this.videoLoading();
      console.log(this.videoplayer)
  }

  componentWillUnmount(){
      this.videoplayer.destroy();
  }
   render(){
       const {stream}=this.props;
       if(!stream){
           return<div>Loading..</div> 
       }else{
    return (
            <div>
                <video ref={this.videoref} style={{width : '100%'}} controls/>
             <h1>{stream.title}</h1>
             <h5>{stream.description}</h5>
            </div>
        );
    }
   }
};
const mapStateToProps=(state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);