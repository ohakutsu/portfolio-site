import React from 'react'
import Link from 'next/link'
import { Title } from '../components/Title'

const AboutPage: React.FC = () => (
  <>
    <Title text={'About'}/>
    <Link href='/'>
      <a>Go Home</a>
    </Link>
  </>
)

export default AboutPage
