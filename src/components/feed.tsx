import React from 'react';

type userType = {
  username: string,
  avatar: string
}

type tweetType = {
  id: number,
  user: userType,
  createdAt: string,
  content: string
}

type FeedProp = {
  tweets: tweetType[]
}

const Feed = ({ tweets }: FeedProp) => {
  return (
    <div className="space-y-4">
      {tweets.map((tweet) => (
        <div className="bg-white rounded-lg p-4 shadow" key={tweet.id}>
          <div className="flex items-center">
            <img src={tweet.user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
            <div className="ml-2">
              <h2 className="text-lg font-semibold">{tweet.user.username}</h2>
              <p className="text-gray-500">{tweet.createdAt}</p>
            </div>
          </div>
          <p className="mt-2">{tweet.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
