'use client';
import {
  CardHeader,
  Card,
  CardBody,
  Input,
  Image as UiImage,
} from '@nextui-org/react';
import React, { useEffect } from 'react';
import BG from '@/assets/loginMobile.jpg';
import { signIn, useSession } from 'next-auth/react';
function Page() {
  const { data: session } = useSession();

  useEffect(() => {
    console.debug(session);
  }, [session]);
  const handleOnRegister = async () => {
    const credentials = {
      email: 'some@gmail.com',
      password: '122312',
      // otros campos
    };

    // Llamada a la función signIn de next-auth
    const result = await signIn('credentials', {
      redirect: false,
      ...credentials,
    });
    console.debug(result);
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
          <form className='flex gap-5 flex-col w-full'>
            <Input
              type='email'
              label='email'
              placeholder='
          example.xyz@mail.com'
            />
            <Input type='password' label='password' />
            <Input type='submit' value='Registrarse' />
          </form>
        </CardBody>
      </Card>
    </main>
  );
}

export default Page;
