import React from 'react';

export default function Scroll(props) {
  return <div style={{overflow:'scroll',border :'3px solid black',height:'550px'}}>
        {props.children}
         </div>;
}
