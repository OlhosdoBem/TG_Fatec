// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode } from "react"
import { Container } from "../styles/pages/Home"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import CloseIcon from "@material-ui/icons/Close"

import {
  Fields2,
  Fields3,
  ForgotLink,
  LoginFrame,
  SigninButton,
  Title,
  Name,
  ViewLoginFrame,
  Close
} from "../styles/pages/RegistrationsReceive"

interface RegistrationReceiveProps {
  children?: ReactNode
}

const RegistrationReceive: FC<RegistrationReceiveProps> = () => {
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
              <a href="/registrationOptions">
                <CloseIcon color="action" />
              </a>
            </Close>
            <Title>Cadastre-se</Title>
            {/* <SubTitle><a href="#">Faça seu cadastro AQUI</a></SubTitle> */}

            <ForgotLink> É rápido e fácil</ForgotLink>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Nome Completo"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Telefone"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Celular"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
            <ForgotLink>Fale um pouco sobre você:</ForgotLink>
            <Fields3>
              <Name>
                <textarea />
              </Name>
            </Fields3>

            <SigninButton>Cadastre-se</SigninButton>
          </LoginFrame>
        </ViewLoginFrame>
      </Container>
    </>
  )
}

export default RegistrationReceive
