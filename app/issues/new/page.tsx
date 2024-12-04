'use client';

import { TextField, Button, Callout, Text } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from "@/app/validations/validationSchemas";
import { z } from 'zod';
import ErrorMessege from "@/app/components/ErrorMessege";
import Spinner from '@/app/components/Spinner';


// Us same API validation that use for validat new issue
type IssueForm = z.infer<typeof createIssueSchema>;


const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);


  return (
    <div className='max-w-xl'>
      { error && 
        <Callout.Root color="red" className='mb-5'>
          <Callout.Text>{ error }</Callout.Text>
        </Callout.Root>
      }

      {/* flex flex-col items-end */}
      <form className='max-w-xl space-y-3' onSubmit={ handleSubmit(async (data) => {
        try {
          setSubmitting(true);
          await axios.post('/api/issues', data);
          router.push('/issues');

        } catch (error) {
          setSubmitting(false);
          setError('An unexpected error occurred.');
        }
      })}> 
          <TextField.Root className='w-full' placeholder="Title" { ...register('title') } />
          <ErrorMessege>{ errors.title?.message }</ErrorMessege>

          <Controller name='description' control={ control }
            render={ ({ field }) => ( 
              <SimpleMDE className='w-full' placeholder="Description ..." { ...field } /> 
            )} 
          />
          <ErrorMessege>{ errors.description?.message }</ErrorMessege>

          <Button disabled={ isSubmitting }>Create Issue { isSubmitting && <Spinner /> }</Button>
      </form>
    </div>
  )
}


export default NewIssuePage