import React from 'react'
import Link from 'next/link'
import { Title } from '../components/Title'

const IndexPage: React.FC = () => (
  <>
    <Title text={'Home'}/>
    <Link href='/about'>
      <a>Go About</a>
    </Link>
  </>
)

export default IndexPage
