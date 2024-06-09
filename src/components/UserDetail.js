import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUser } from '../api/api';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUser(id);
      setUser(response.data.data);
    };

    getUser();
  }, [id]);

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={user.first_name} />
    </div>
  );
};

export default UserDetail;
