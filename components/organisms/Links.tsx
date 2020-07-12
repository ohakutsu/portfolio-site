import * as React from 'react'
import { SectionTitle } from '../molecules/SectionTitle'
import styled from 'styled-components'

export const Links: React.FC = () => {
  const linkList = [
    { url: 'https://www.facebook.com/ohakutsu', title: 'Facebook' },
    { url: 'https://github.com/ohakutsu', title: 'GitHub' },
    { url: 'https://www.linkedin.com/in/ohakutsu/', title: 'LinkedIn' },
    { url: 'https://qiita.com/ohakutsu', title: 'Qiita' },
    { url: 'https://twitter.com/ohakutsu', title: 'Twitter' }
  ]

  return (
    <>
      <SectionTitle>
        Links
      </SectionTitle>
      <StyledUl>
        {linkList.map(link => (
          <StyledLi key={link.title}>
            <a href={link.url} target='_blank' rel='noreferrer'>{link.title}</a>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  )
}

const StyledUl = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none'
})

const StyledLi = styled.li({
  marginRight: '10px'
})