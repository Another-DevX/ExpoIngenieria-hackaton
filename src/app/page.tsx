'use client';
import Feed from '@/components/feed';
import { Nav } from '@/components/navbar';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetch() {
      const response = await axios.get('/api/publish');
      setData(response.data);
    }
    fetch();
  }, []);
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Nav />
      <Feed posts={data} />
    </>
  );
}
