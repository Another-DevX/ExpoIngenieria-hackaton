'use client';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  User,
  useDisclosure,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/assets/icon.jpg';

type User = {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  emailVisibility: boolean;
  follower: number;
  followers: User[];
  following: number;
  followings: User[];
  id: string;
  name: string;
  updated: Date;
  username: string;
  verified: boolean;
  isFollowing: boolean;
};

function Page({ params }: { params: { id: string } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { push } = useRouter();
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const handleOnFollow = async () => {
    if (!session) return onOpen();
    if (!params.id) return;
    // @ts-expect-error The accesToken values is not typed in next auth
    if (params.id !== session?.accessToken) {
      try {
        const response = await axios.post('/api/follow', {
          userId: params.id,
          follow: !data?.isFollowing,
          // @ts-expect-error The accesToken values is not typed in next auth
          currentFollower: session?.accessToken,
        });
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    }
  };

  console.debug(session);
  useEffect(() => {
    async function getData() {
      try {
        const response: AxiosResponse<User> = await axios.get('/api/get-user', {
          headers: {
            userId: params.id,
          },
        });
        let isFollowing = false;
        if (session) {
          console.log(session);
          const currentFollowing: AxiosResponse<any> = await axios.get(
            '/api/get-follow',
            {
              headers: {
                // @ts-expect-error The accesToken values is not typed in next auth
                userId: session?.accessToken,
                currentUserId: params.id,
              },
            }
          );
          isFollowing = currentFollowing.data.isFollowing;
        }

        console.log(response);
        setIsLoading(false);
        setData({ ...response.data, isFollowing });
      } catch (e) {
        console.error(e);
      }
    }

    if (params.id && isLoading) getData();
  }, [session]);
  console.debug(data);

  if (isLoading) {
    return (
      <main>
        <h4>Loading...</h4>
      </main>
    );
  }

  return (
    <main>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Opps.</ModalHeader>
              <ModalBody>
                <p>Debes iniciar sesión para poder seguir a este usuario. </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cerrar
                </Button>
                <Button color='primary' onPress={() => push('/auth/login')}>
                  Iniciar sesión
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className='py-10 px-2 flex flex-col gap-2'>
        <Image
          src={Logo}
          alt='icon'
          height={64}
          width={64}
          className='absolute top-2 left-2'
        />
        <User
          name={data?.username}
          description='Fitness influencer'
          avatarProps={{
            src: 'https://i.pravatar.cc/150',
          }}
        />
        <div className='flex flex-col gap-2 w-full '>
          <div className='flex flex-row gap-4 justify-center w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h3>Followers</h3>
              {data?.follower}
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Following</h3>
              {data?.following}
            </div>
          </div>

          {/* @ts-expect-error The accesToken values is not typed in next auth */}
          {((session && params.id !== session.accesToken) || !session) && (
            <Button onClick={handleOnFollow}>
              {data?.isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </div>
      </div>
      <Divider />
      <div></div>
    </main>
  );
}

export default Page;
