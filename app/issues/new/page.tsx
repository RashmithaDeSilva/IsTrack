'use client';

import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'


const NewIssuePage = () => {
  return (
    // flex flex-col items-end
    <div className='max-w-xl space-y-3'> 
        <TextField.Root className='w-full' placeholder="Title" />
        <TextArea className='w-full' placeholder="Discription ..." />
        <Button>Create Issue</Button>
    </div>
  )
}


export default NewIssuePage