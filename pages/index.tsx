import * as React from 'react'
import styled from 'styled-components'
import { Profile } from '../components/organisms/Profile'
import { Links } from '../components/organisms/Links'
import { About } from '../components/organisms/About'
import { Container } from '../components/templates/Container'
import { Header } from '../components/templates/Header'
import { Footer } from '../components/templates/Footer'
import { Copyright } from '../components/molecules/Copyright'

const IndexPage: React.FC = () => (
  <>
    <Header>
      <ProfileSection className='container'>
        <Profile />
      </ProfileSection>
    </Header>
    <Container>
      <About />
    </Container>
    <Container>
      <Links />
    </Container>
    <Footer>
      <Copyright>© 2020 ohakutsu.com</Copyright>
    </Footer>
  </>
)

const ProfileSection = styled.section({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export default IndexPage
