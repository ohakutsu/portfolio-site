import * as React from 'react'
import { Abouts as AboutsType } from '../../datas/abouts'
import { SectionTitle } from '../molecules/SectionTitle'

interface Props {
  abouts: AboutsType
}

export const About: React.FC<Props> = ({ abouts }: Props) => (
  <>
    <SectionTitle>
      About
    </SectionTitle>
    <ul>
      {abouts.map(text => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  </>
)
