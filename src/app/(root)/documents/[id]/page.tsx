import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'></div>
        <p className='document-title'>Test Document Title</p>
      </Header>
      <Editor />
    </div>
  )
}

export default Document