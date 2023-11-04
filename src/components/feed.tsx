import React from 'react';
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from '@nextui-org/react';
import moment from 'moment';
import { UserTwitterCard } from './UserTwitterCard';

type userType = {
  username: string;
  avatar: string;
};

type tweetType = {
  id: number;
  user: userType;
  createdAt: string;
  content: string;
};

type FeedProp = {
  tweets: tweetType[];
};

const formatDate = (inputDate: any) => {
  /**
   * Formatea la fecha dada al formato 'DD/MM/YYYY'.
   * @param {string} inputDate - La fecha en formato ISO o similar para ser formateada.
   * @returns {string} - La fecha formateada en 'DD/MM/YYYY'.
   */

  return moment(inputDate).format('DD/MM/YYYY');
};

const Feed = ({ posts }: any) => {
  console.debug(posts);
  return (
    <div className='space-y-4 flex justify-center py-20 px-2'>
      {posts.map((post: any) => (
        <Card className='max-w-xl'  key={post.id}>
          <CardHeader className='flex-col justify-start items-start gap-2'>
            <Popover showArrow placement='bottom'>
              <PopoverTrigger>
                <User
                  name={post.username}
                  description={formatDate(post.created)}
                  avatarProps={{
                    src: 'https://i.pravatar.cc/150',
                  }}
                />
              </PopoverTrigger>
              <PopoverContent className='p-1'>
                <UserTwitterCard id={post.userid} />
              </PopoverContent>
            </Popover>
            <h2 >{post.title}</h2>
          </CardHeader>
          <CardBody>
            <Image src={post.image} alt='image' />
            <p className='mt-2'>{post.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Feed;
