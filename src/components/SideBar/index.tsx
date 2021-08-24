import React, { FC, ReactNode, useState } from "react"
import {
  LogoName,
  SideBar as Side,
  SideHeader
} from "../../styles/pages/SideBar"
import { MenuIcon, GraphIcon, SearchIcon } from "../../styles/icons"
import EpicLogoMenu from "../../assets/epic-logo-menu.svg"

interface SideBarProps {
  children?: ReactNode
  opened: true | false
}

const SideBar: FC<SideBarProps> = ({ ...props }): JSX.Element => {
  return (
    <Side className={props.opened ? "open" : ""}>
      <SideHeader>
        <EpicLogoMenu />
        <LogoName>Quest Helper</LogoName>
        <MenuIcon size={1}/>
      </SideHeader>
    </Side>
  )
}

export default SideBar
