import React from 'react'
import styled from 'styled-components'

export const GoogleSlide = () => (
  <Wrapper>
    <Slide
      src="https://docs.google.com/presentation/d/e/2PACX-1vRJvT9cxfzPR_asxBZmS5HQIb8mBQ15lZrwFz6Lf8KKFc-u_JYrGkA29gwF3-GpvnLFgM9FLWqQYrlQ/embed?start=false&loop=false&delayms=3000"
      frameBorder="0"
      allowFullScreen={true}
    />
  </Wrapper>
)

const Wrapper = styled.div({
  position: 'relative',
  width: '100%',

  '&:before': {
    content: '""',
    display: 'block',
    paddingTop: '56.25%',
  },
})

const Slide = styled.iframe({
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
})
