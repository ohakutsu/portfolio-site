import * as React from 'react'

interface Props {
  text: string
}

export const Title: React.FC<Props> = ({ text }: Props) => {
  return (
    <h1>{text}</h1>
  )
}
