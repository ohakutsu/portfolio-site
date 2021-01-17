import React from 'react'
import { SectionTitle } from '~/components/molecules/SectionTitle'
import { Abouts as AboutsType } from '~/datas/abouts'

interface Props {
  abouts: AboutsType
}

export const About: React.FC<Props> = ({ abouts }: Props) => (
  <>
    <SectionTitle>About</SectionTitle>
    <ul>
      {abouts.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  </>
)
