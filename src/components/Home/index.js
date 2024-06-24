import Cookies from 'js-cookie'
import {
  AppContainer,
  HomeContainer,
  NavHeader,
  NavLogoContainer,
  LogoLink,
  NavLogo,
  LogoutButton,
  ContentSection,
  Heading,
  Card,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <AppContainer>
      <HomeContainer>
        <NavHeader>
          <NavLogoContainer>
            <LogoLink to="/">
              <NavLogo
                src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
                alt="website logo"
              />
            </LogoLink>
          </NavLogoContainer>
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </NavHeader>
        <ContentSection>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <Card
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </ContentSection>
      </HomeContainer>
    </AppContainer>
  )
}

export default Home
