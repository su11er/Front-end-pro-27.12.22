import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    // Отримання списку користувачів
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const fetchAlbums = (userId) => {
    // Отримання списку альбомів для вибраного користувача
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  };

  const fetchPhotos = (albumId) => {
    // Отримання списку фотографій для вибраного альбому
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error));
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
    setSelectedAlbum(null);
    setAlbums([]);
    setPhotos([]);
    fetchAlbums(userId);
  };

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId);
    setPhotos([]);
    fetchPhotos(albumId);
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => handleUserClick(user.id)}>Album</button>
          {selectedUser === user.id && (
            <ul>
              {albums.map(album => (
                <li key={album.id}>
                  {album.title}
                  <button onClick={() => handleAlbumClick(album.id)}>Photos</button>
                  {selectedAlbum === album.id && (
                    <ul>
                      {photos.map(photo => (
                        <li key={photo.id}>
                          <img src={photo.thumbnailUrl} alt={photo.title} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;