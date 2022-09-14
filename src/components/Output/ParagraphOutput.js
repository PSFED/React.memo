import React from 'react'
import Paragraph from './Paragraph'

const ParagraphOutput = ({ isShown }) => {
  return <Paragraph>{isShown ? 'New Paragraph' : ''}</Paragraph>
}

export default React.memo(ParagraphOutput)
