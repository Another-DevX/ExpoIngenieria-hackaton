'use client';
import {
  CardHeader,
  Card,
  CardBody,
  Input,
  Image as UiImage,
} from '@nextui-org/react';
import React from 'react';
import BG from '@/assets/loginMobile.jpg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

function Page() {
  const { replace } = useRouter();
  const handleOnRegister = async (e: any) => {
  
    e.preventDefault();
    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
      userName: e.target.userName.value,
    };
    try {
      const response = await axios.post('/api/auth/register', credentials);
      console.debug(response);
      const result = await signIn('credentials', {
        redirect: false,
        ...credentials,
      });
      if (response.status === 200 || result?.ok) {
        replace('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='h-screen'>
      <UiImage
        className='rounded-none'
        shadow='lg'
        src={BG.src}
        alt='background'
      />
      <Card className=' z-10 justify-self-end h-fit absolute bottom-0 w-full rounded-b-none'>
        <CardHeader>Sign In</CardHeader>
        <CardBody>
          <form
            onSubmit={handleOnRegister}
            className='flex gap-5 flex-col w-full'
          >
            <Input
              name='userName'
              type='text'
              label='username'
              placeholder='jonh.doe'
            />
            <Input
              name='email'
              type='email'
              label='email'
              placeholder='
          example.xyz@mail.com'
            />
            <Input name='password' type='password' label='password' />
            <Input type='submit' value='Registrarse' />
          </form>
        </CardBody>
      </Card>
    </main>
  );
}

export default Page;
