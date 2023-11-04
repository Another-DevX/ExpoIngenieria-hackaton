'use client';
import {
  CardHeader,
  Card,
  CardBody,
  Input,
  Image as UiImage,
  CardFooter,
  Link,
} from '@nextui-org/react';
import React, { useEffect } from 'react';
import BG from '@/assets/loginMobile.jpg';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Page() {
  const { data: session } = useSession();
  const { replace } = useRouter();
  useEffect(() => {
    console.debug(session);
  }, [session]);

  const handleOnLogin = async (e: any) => {
    e.preventDefault();
    const credentials = {
      username: e.target.email.value,
      password: e.target.password.value,
    };

    // Llamada a la función signIn de next-auth
    const result = await signIn('credentials', {
      redirect: false,
      ...credentials,
    });
    if (result?.ok) {
      replace('/');
    }
  };

  return (
    <main className='h-screen  flex justify-center'>
      <div className='max-w-lg relative h-full'>
        <UiImage
          className='rounded-none'
          shadow='lg'
          src={BG.src}
          alt='background'
        />
        <Card className=' z-10 justify-self-end h-fit absolute bottom-0 w-full rounded-b-none'>
          <CardHeader>Iniciar sesión</CardHeader>
          <CardBody>
            <form
              onSubmit={handleOnLogin}
              className='flex gap-5 flex-col w-full'
            >
              <Input
                name='email'
                type='email'
                label='email'
                placeholder='
            example.xyz@mail.com'
              />
              <Input name='password' type='password' label='password' />
              <Input type='submit' value='Ingresar' />
            </form>
          </CardBody>
          <CardFooter>
            <Link href={'/auth/register'}>
              ¿Aun no tienes cuenta? registrate
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

export default Page;
