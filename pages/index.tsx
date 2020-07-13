import * as React from 'react'
import styled from 'styled-components'
import { About } from '../components/organisms/About'
import { abouts } from '../datas/abouts'
import { Container } from '../components/templates/Container'
import { Copyright } from '../components/molecules/Copyright'
import { Footer } from '../components/templates/Footer'
import { Header } from '../components/templates/Header'
import { Links } from '../components/organisms/Links'
import { links } from '../datas/links'
import { Profile } from '../components/organisms/Profile'

const IndexPage: React.FC = () => (
  <>
    <Header>
      <ProfileSection className='container'>
        <Profile />
      </ProfileSection>
    </Header>
    <Container>
      <About abouts={abouts} />
    </Container>
    <Container>
      <Links links={links} />
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
