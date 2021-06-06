import * as React from 'react';
import './importIcons'
import './icon.scss'
import classes from './helper/className';
interface IconProps extends React.SVGAttributes<SVGAElement | Element>{
  name:string;
}
const Icon:React.FC<IconProps> = (props)=>{
  // @ts-ignore
  const {className,name,...rest}=props
  return (
      <svg className={classes('hui-icon', className)}
           {...rest}
           onClick={props.onClick}>
        <use xlinkHref={`#${name}`}/>
      </svg>
  )
}
export default Icon