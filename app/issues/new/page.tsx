'use client';

import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    // flex flex-col items-end
    <div className='max-w-xl space-y-3'> 
        <TextField.Root className='w-full' placeholder="Title" />
        <SimpleMDE className='w-full' placeholder="Discription ..." />
        <Button>Create Issue</Button>
    </div>
  )
}


export default NewIssuePage