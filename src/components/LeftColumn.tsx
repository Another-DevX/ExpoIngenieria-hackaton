import React from 'react';

const LeftColumn = () => {
  // Datos simulados del usuario
  const user = {
    username: 'miusuario',
    fullName: 'Mi Nombre de Usuario',
    avatarUrl: 'https://example.com/avatar.png',
    followers: 1000,
    following: 500,
  };

  return (
    <div className="w-1/4 p-4 bg-gray-200">
      {/* Avatar del usuario */}
      <img
        src={user.avatarUrl}
        alt={`Avatar de ${user.username}`}
        className="rounded-full h-20 w-20 mx-auto mb-2"
      />

      {/* Nombre de usuario */}
      <h2 className="text-lg font-semibold text-center">{user.username}</h2>

      {/* Nombre completo del usuario */}
      <p className="text-sm text-center text-gray-600">{user.fullName}</p>

      {/* Estadísticas del usuario */}
      <div className="mt-4 text-center">
        <div>
          <span className="font-semibold">{user.followers}</span> Seguidores
        </div>
        <div>
          <span className="font-semibold">{user.following}</span> Siguiendo
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
