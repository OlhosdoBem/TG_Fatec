// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode } from "react"
import {
  LogoName,
  SideBar as Side,
  SideHeader
} from "../../styles/pages/SideBar"
import { MenuIcon } from "../../styles/icons"
import EpicLogoMenu from "../../assets/epic-logo-menu.svg"

interface SideBarProps {
  children?: ReactNode
  opened: true | false
}

const SideBar: FC<SideBarProps> = ({ ...props }): JSX.Element => {
  return (
    <Side className={props.opened ? "open" : ""}>
      <SideHeader>
        <MenuIcon size={1} />
      </SideHeader>
    </Side>
  )
}

export default SideBar
