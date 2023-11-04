'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  useEffect(() => {
    async function getData() {
      const response: User = await axios.get('/api/get-user', {
        headers: {
          userId: params.id,
        },
      });
      setData(response);
    }
  }, []);
  console.debug(data)

  return (
    <main>
      <h4></h4>
    </main>
  );
}

export default Page;
