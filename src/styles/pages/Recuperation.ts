import styled from "styled-components"
export const ViewLoginFrame = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const LoginFrame = styled.div`
  width: 625px;
  height: 325px;
  padding: 40px 35px 35px 35px;
  border-radius: 40px;
  background: ${props => props.theme.primary.main};
  box-shadow: 13px 13px 20px ${props => props.theme.primary.dark},
    -13px -13px 20px ${props => props.theme.primary.light};
`

export const Logo = styled.div`
  background: url("logo.png") center no-repeat;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 
  /* logo */ 0px 0px 2px ${props => props.theme.primary.dark},
    /* off set */ 0px 0px 0px 5px ${props => props.theme.primary.main},
    /* bottom rigth */ 8px 8px 15px #80cbc4,
    /* top left */ -8px -8px 15px ${props => props.theme.primary.light};
`

export const Title = styled.div`
  text-align: start;
  font-size: 28px;
  font-weight: bolder;
  padding-top: 0px;
  letter-spacing: 0.5px;
`

export const SubTitle = styled.div`
  text-align: right;
  font-size: 15px;
  padding-top: 7px;
  
`

export const Fields = styled.div`
  width: 100%;
  padding: 55px 5px 5px 5px;
  & input {
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
    color: #555;
    padding: 28px 10px 20px 5px;
  }
  & svg {
    height: 22px;
    margin: 0 10px -3px 25px;
  }
`

export const Fields2 = styled.div`
  width: 100%;
  padding: 0px 5px 0px 5px;
  & input {
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    color: #555;
    padding: 15px 15px 15px 30px;
  }
  & svg {
    height: 22px;
    margin: 0 10px -3px 25px;
  }
`

export const Username = styled.div`
  margin-bottom: 30px;
  border-radius: 35px;
  box-shadow: inset 8px 8px 8px ${props => props.theme.primary.dark},
    inset -8px -8px 8px ${props => props.theme.primary.light};
`

export const Name = styled.div`
  margin-bottom: 30px;
  border-radius: 35px;
  box-shadow: inset 8px 8px 8px ${props => props.theme.primary.dark},
    inset -8px -8px 8px ${props => props.theme.primary.light};
`

export const Password = styled.div`
  margin-bottom: 30px;
  border-radius: 35px;
  box-shadow: inset 8px 8px 8px ${props => props.theme.primary.dark},
    inset -8px -8px 8px ${props => props.theme.primary.light};
`

export const SigninButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: ${props => props.theme.primary.light};
  text-align: center;
  background: #00796b;
  box-shadow: 3px 3px 3px ${props => props.theme.primary.dark},
    -3px -3px 8px ${props => props.theme.primary.light};
  transition: 0.5s;
  &:hover {
    background: #004d40;
  }
  &:active {
    background: #000;
    color: #fff;
  }
`

export const ForgotLink = styled.div`
  margin: 10px;
  padding-bottom: 20px;
  text-align: start;
  font-size: 15px;
  & a {
    text-decoration: none;
    color: #000;
  }
`

export const Close = styled.div`
  padding: 0px 0px 0px 525px;
`
