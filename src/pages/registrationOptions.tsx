// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode } from "react"
import { Container } from "../styles/pages/Home"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import CloseIcon from "@material-ui/icons/Close"

import {
  LoginFrame,
  SigninButton,
  Title,
  ViewLoginFrame,
  Close,
  ForgotLink
} from "../styles/pages/RegistrationOptions"

interface RegistrationOptionsProps {
  children?: ReactNode
}

const RegistrationOptions: FC<RegistrationOptionsProps> = () => {
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
            <Title>Você deseja doar ou receber doação?</Title>{" "}
            <ForgotLink>Escolha uma opção abaixo</ForgotLink>
            <a href="/registration">
              <SigninButton>DOAR</SigninButton>
            </a>
            <a href="/registrationsReceive">
              <SigninButton>RECEBER DOAÇÃO</SigninButton>
            </a>
          </LoginFrame>
        </ViewLoginFrame>
      </Container>
    </>
  )
}

export default RegistrationOptions
