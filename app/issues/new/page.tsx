'use client';

import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


type IssueForm = {
  title: string,
  description: string,
};


const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();


  return (
    // flex flex-col items-end
    <form className='max-w-xl space-y-3' onSubmit={ handleSubmit(async (data) => {
      await axios.post('/api/issues', data);
      router.push('/issues');
    })}> 
        <TextField.Root className='w-full' placeholder="Title" { ...register('title') } />
        <Controller name='description' control={ control }
          render={ ({ field }) => <SimpleMDE className='w-full' placeholder="Description ..." { ...field } /> } />
        <Button>Create Issue</Button>
    </form>
  )
}


export default NewIssuePage