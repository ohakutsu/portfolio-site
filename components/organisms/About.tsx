import * as React from 'react'
import { SectionTitle } from '../molecules/SectionTitle'

export const About: React.FC = () => {
  const aboutList = [
    '青森県弘前市 出身',
    '岩手大学理工学部システム創成工学科 卒業',
    '2020年4月 新卒エンジニアとして株式会社エイチームに入社',
    '現在 Increments株式会社に出向中'
  ]

  return (
    <>
      <SectionTitle>
        About
      </SectionTitle>
      <ul>
        {aboutList.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  )
}
