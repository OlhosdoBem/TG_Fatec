import React, { FC, ReactNode } from "react"
import { SvgIcon } from "../baseIcon"

interface GraphIconProps {
  children?: ReactNode
  size?: 1 | 2 | 3
  color?: string
}

const GraphIcon: FC<GraphIconProps> = ({ ...props }) => {
  return (
    <SvgIcon
      size={props.size}
      fill="999"
      viewBox="0 0 20 20"
      color={props.color}
    >
      <path d="M10.281,1.781C5.75,1.781,2.062,5.469,2.062,10s3.688,8.219,8.219,8.219S18.5,14.531,18.5,10S14.812,1.781,10.281,1.781M10.714,2.659c3.712,0.216,6.691,3.197,6.907,6.908h-6.907V2.659z M10.281,17.354c-4.055,0-7.354-3.298-7.354-7.354c0-3.911,3.067-7.116,6.921-7.341V10c0,0.115,0.045,0.225,0.127,0.305l5.186,5.189C13.863,16.648,12.154,17.354,10.281,17.354M15.775,14.882l-4.449-4.449h6.295C17.522,12.135,16.842,13.684,15.775,14.882"></path>
    </SvgIcon>
  )
}

export default GraphIcon
