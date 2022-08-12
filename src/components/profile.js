import React from 'react';
import "../css/profile.css";
import "../css/terminal.css";
import Terminal from './terminal';
import {info} from './info';



export default function Profile() {

    function aboutMe(){
        return<>
        <div className='terminalContents'>
            <p style={{margin:'0px'}}> 
                <span style={{color:"#00ffa4"}}>jaehee Noh $</span>
            </p>
            <p style={{margin:'0px'}}>
                <span style={{color:"#00ffa4"}}>about jaehee Noh $ </span>
                <span className='aboutMeTxt'>{info.bio}</span>
               
            </p>
            
        </div>
        </>;
    }

    function skill(){
        return<>
        <div className='terminalContents'>
            <p style={{margin:'0px'}}> 
                <span style={{color:"#00ffa4"}}>cd skill $</span>
            </p>
            <p style={{margin:'0px'}}>
                <span style={{color:"#00ffa4"}}>skills/tools <span
                className={skill}>(main)</span> $</span> ls
            </p>
            <p style={{color:"#00ffa4"}}> Proficient With</p>
            <ul className='skill'>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            

            
        </div>
        </>;
    }

    return (
         <div className='profileWrap'>

           <Terminal text={aboutMe()}/>
           <Terminal text={skill()}/>
      
        </div> 
    );
}


