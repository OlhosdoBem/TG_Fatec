// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode } from "react"
import { Container } from "../styles/pages/Home"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import CloseIcon from "@material-ui/icons/Close"

import {
  Fields2,
  ForgotLink,
  LoginFrame,
  SigninButton,
  Title,
  Name,
  ViewLoginFrame,
  Close
} from "../styles/pages/Registration"

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
                  placeholder="CPF"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
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
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Senha"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Confirmar Senha"
                  // value={user}
                  // onChange={setUserContent}
                />
              </Name>
            </Fields2>

            <SigninButton>Cadastre-se</SigninButton>
          </LoginFrame>
        </ViewLoginFrame>
      </Container>
    </>
  )
}

export default Registration
