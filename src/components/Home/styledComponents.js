import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  height: 100vh;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`
export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`
export const NavLogoContainer = styled.div`
  display: flex;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const NavLogo = styled.img`
  width: 100px;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
`
export const Card = styled.img`
  width: 500px;
`
