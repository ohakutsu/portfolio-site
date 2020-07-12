import * as React from 'react'
import styled from 'styled-components'
import { ProfileImage } from '../molecules/ProfileImage'

export const Profile: React.FC = () => (
  <ProfileContainer>
    <ProfileImage src='/profile-image.png' />
    <Title>ohakutsu.com</Title>
  </ProfileContainer>
)

const ProfileContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'
})

const Title = styled.h1({
  margin: '0 0 0 20px',
  letterSpacing: 1,

  '@media (max-width: 767px)': {
    margin: 0
  }
})
