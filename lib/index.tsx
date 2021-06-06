import React from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon';
const fn:React.MouseEventHandler=(e)=>{
  console.log(e)
}

ReactDom.render(
  <div>
    <Icon name="qq"
          className="icon"
          onMouseEnter={fn}
          onClick={fn}/>
  </div>
  ,document.querySelector('#root'))