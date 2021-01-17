import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '~/components/molecules/SectionTitle'
import { Links as LinksType } from '~/datas/links'

interface Props {
  links: LinksType
}

export const Links: React.FC<Props> = ({ links }: Props) => (
  <>
    <SectionTitle>Links</SectionTitle>
    <StyledUl>
      {links.map((link) => (
        <StyledLi key={link.title}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        </StyledLi>
      ))}
    </StyledUl>
  </>
)

const StyledUl = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
})

const StyledLi = styled.li({
  marginRight: '10px',
})
