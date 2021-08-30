// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode } from "react"
import { Container } from "../styles/pages/Home"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import CloseIcon from "@material-ui/icons/Close"

import {
  Fields2,
  LoginFrame,
  SigninButton,
  Title,
  Name,
  ViewLoginFrame,
  Close,
  ForgotLink
} from "../styles/pages/recuperation"

interface RegistrationProps {
  children?: ReactNode
}

const Registration: FC<RegistrationProps> = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch"
        }
      }
    })
  )

  return (
    <>
      <Container>
        <ViewLoginFrame>
          <LoginFrame>
            <Close>
              <a href="/authentication">
                <CloseIcon color="action" />
              </a>
            </Close>
            <Title>Encontre sua conta</Title>{" "}
            <ForgotLink>Insira seu email para procurar a sua conta.</ForgotLink>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="E-mail"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
            <SigninButton>Pesquisar</SigninButton>
          </LoginFrame>
        </ViewLoginFrame>
      </Container>
    </>
  )
}

export default Registration
