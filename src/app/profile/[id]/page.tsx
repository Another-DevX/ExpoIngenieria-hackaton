'use client';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Button, Divider, User } from '@nextui-org/react';

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
};

function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(params);
  useEffect(() => {
    async function getData() {
      try {
        const response: AxiosResponse<User> = await axios.get('/api/get-user', {
          headers: {
            userId: params.id,
          },
        });
        console.log(response);
        setIsLoading(false);
        setData(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    if (params.id && isLoading) getData();
  }, []);
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
      <div className='py-10 px-2 flex flex-col gap-2'>
        <User
          name={data?.username}
          description='Fitness influencer'
          avatarProps={{
            src: 'https://i.pravatar.cc/150?img=68',
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
          <Button>Follow</Button>
        </div>
      </div>
      <Divider />
      <div></div>
    </main>
  );
}

export default Page;
