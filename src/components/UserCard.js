import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <Link to={`/user/${user.id}`}>Посмотреть детали</Link>
    </div>
  );
};

export default UserCard;
