import React from 'react';
import ReactDOM from 'react-dom';

const Modal=props=>{

     console.log(props);
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss}
        className='ui dimmer modals visible active'>
            <div onClick={event=> event.stopPropagation()}
             className='ui standard modal visible active'>
            <div className='header'><h3>{props.title}</h3></div>
                <div className='content'>
                   {props.content}
                </div>
                <div className='actions'>
                    {props.actions}
                </div>

            </div>
        </div>,
        document.querySelector('#modal')
    );
};


export default Modal;