import styled from "styled-components"

export const SideHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
`

export const LogoName = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
`

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;

  &.open {
    width: 250px;
  }

  & svg {
    color: #fff;
    height: 50px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }

  &.open ${LogoName} {
    opacity: 1;
  }
`
