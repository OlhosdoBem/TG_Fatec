import React, { FC, ReactNode } from "react"
import styled from "styled-components"

interface svgIconProps {
  children?: ReactNode
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  fill?: string
  viewBox?: string
  color?: string
}

export const SvgIcon: FC<svgIconProps> = ({ ...props }) => {
  const Tag = styled.svg`
    width: ${props.size}em;
    height: ${props.size}em;
    & path,
    polygon,
    rect {
      fill: ${componentProps =>
        props.color ? props.color : componentProps.theme.primary.dark};
    }

    & circle {
      stroke: ${componentProps =>
        props.color ? props.color : componentProps.theme.primary.dark};
      stroke-width: 1;
    }
  `

  return (
    <Tag fill={props.fill} viewBox={props.viewBox}>
      {props.children}
    </Tag>
  )
}
