// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode, useState } from "react"
import { LockIcon, MailIcon } from "../styles/icons"
import Link from "next/link"
import {
  Fields,
  ForgotLink,
  LoginFrame,
  Logo,
  Password,
  SigninButton,
  Title,
  Username,
  ViewLoginFrame
} from "../styles/pages/Authentication"

interface AuthenticationProps {
  children?: ReactNode
}

const Authentication: FC<AuthenticationProps> = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const setUserContent = e => {
    setUser(e.target.value)
  }

  const setPasswrodContent = e => {
    setPassword(e.target.value)
  }

  return (
    <ViewLoginFrame>
      <LoginFrame>
        <a target="_blank" href="http://olhosdobem.ong.br/" rel="noreferrer">
          <Logo />
        </a>

        <Title>Olhos do Bem</Title>
        {/* <SubTitle><a href="#">Faça seu cadastro AQUI</a></SubTitle> */}
        <ForgotLink>
          FAÇA SEU CADASTRO AQUI <Link href="#">AQUI</Link>
        </ForgotLink>
        <Fields>
          <Username>
            <MailIcon size={2} />
            <input
              type="usename"
              placeholder="usuário"
              value={user}
              onChange={setUserContent}
            />
          </Username>

          <Password>
            <LockIcon />
            <input
              type="password"
              placeholder="senha"
              value={password}
              onChange={setPasswrodContent}
            />
          </Password>
        </Fields>

        <SigninButton>Login</SigninButton>

        <ForgotLink>
          <a href="#"> Esqueci minha senha</a>
        </ForgotLink>
      </LoginFrame>
    </ViewLoginFrame>
  )
}

export default Authentication
