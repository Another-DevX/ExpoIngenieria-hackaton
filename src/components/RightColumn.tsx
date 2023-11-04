import React from 'react';
import {Avatar} from "@nextui-org/react";

const RightColumn = () => {
  // Datos simulados de tendencias
  const trendingTopics = [
    '#Tendencia1',
    '#Tendencia2',
    '#Tendencia3',
    // Agrega más tendencias aquí
  ];

  // Datos simulados de usuarios sugeridos a seguir
  const suggestedUsers = [
    {
      username: 'usuario1',
      avatarUrl: 'https://example.com/avatar1.png',
    },
    {
      username: 'usuario2',
      avatarUrl: 'https://example.com/avatar2.png',
    },
    // Agrega más usuarios sugeridos aquí
  ];

  return (
    <div className="w-1/4 p-4 bg-gray-200 r rounded-lg  shadow">
      <div className="rounded-sm">
        <h2 className="text-lg font-semibold mb-4">Tendencias</h2>
        <ul>
          {trendingTopics.map((topic, index) => (
            <li key={index} className="text-sm text-blue-600 mb-2">
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">A quién seguir</h2>
        <ul>
          {suggestedUsers.map((user, index) => (
            <li key={index} className="flex items-center space-x-2 mb-4">
              
              <Avatar  src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="rounded-full h-8 w-8"  /> 

              <p className="text-sm font-semibold">{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightColumn;
