import React, { FC, ReactNode } from "react"
import { SvgIcon } from "../baseIcon"

interface MenuIconProps {
  children?: ReactNode
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  color?: string
}

const MenuIcon: FC<MenuIconProps> = ({ ...props }) => {
  return (
    <SvgIcon
      size={props.size}
      fill="999"
      viewBox="0 0 20 20"
      color={props.color}
    >
      <path
        d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
    						c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
    						s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
    						c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
      ></path>
    </SvgIcon>
  )
}

export default MenuIcon
