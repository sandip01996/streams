import React from 'react';

import { Field,reduxForm } from 'redux-form';

class StreamForm extends React.Component{
     
    renderError(meta){
       // console.log(meta)
        if (meta.touched && meta.error){
           return (<div className='ui error message'>
                <div className='header'>{meta.error}</div>
            </div>
           ); 
        }

    }
    renderHelp=({input,label,meta})=>{
      //console.log(input)
       return (
       <div className='field'>
           <label>{label}</label>
       <input {...input}  autoComplete='off'/>
       {this.renderError(meta)}
       </div>
       );

    }

    onSubmit=formValues =>{
       console.log(formValues);
       this.props.onSubmit(formValues); 
    
    }
    render(){
      // console.log(this.props);

        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
              
                <Field name ='title' component={this.renderHelp} label='Enter Title'/>
                <Field name ='description' component ={this.renderHelp} label='Enter Description'/>
                <button className='ui primary button'>Submit</button>
            </form>
        );
    }
}

const validate=(formValues)=>{
   // console.log(formValues)
  const errors={};
    if(!formValues.title){
        errors.title='You must enter a Title'
    }
    if(!formValues.description){
        errors.description='You must enter a description'
    }
    return errors;
}

export default    reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);

