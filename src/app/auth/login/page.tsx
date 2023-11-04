'use client';
import { CardHeader, Card, CardBody, Input } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <main className='auth h-screen'>
      <Image alt='background' />
      <Card
        isBlurred
        className='justify-self-end h-fit absolute bottom-0 w-full rounded-b-none'
      >
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
