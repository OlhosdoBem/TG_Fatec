// eslint-disable-next-line no-use-before-define
import React, { useState } from "react"
import SideBar from "../components/SideBar"

const Home: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true)
  function teste() {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <SideBar opened={openMenu} />
      <button style={{ position: "absolute", width: '300px', height: '100px', left: '50%'}} onClick={teste}>
        asd
      </button>
    </>
  )
}

export default Home
