import React from 'react';

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
    <div className="w-1/4 p-4 bg-gray-200">
      <div>
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
              <img
                src={user.avatarUrl}
                alt={`Avatar de ${user.username}`}
                className="rounded-full h-8 w-8"
              />
              <p className="text-sm font-semibold">{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightColumn;
