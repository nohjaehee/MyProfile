import React from 'react';
import  '../css/terminal.css';

function Terminal(props) {
    const {text} = props;
   return (
    <div className='terminalTopWrap'>
        <div className='boxwrap'>
            <div className='red'>x</div>
            <div className='yellow'>-</div>
            <div className='green'>+</div>
        </div>
        <div className='terminalContents'>
            {text}   
        </div>
    </div>

   );
}

export default Terminal;