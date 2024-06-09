import React, { useState } from 'react';
import UserList from '../components/UserList';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <input
        type="text"
        placeholder="Поиск по имени или email"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Все ID</option>
        <option value="even">Четные ID</option>
        <option value="odd">Нечетные ID</option>
        <option value="startsWithA">Имена начинаются с А</option>
        <option value="notStartsWithA">Имена не начинаются с А</option>
      </select>
      <UserList searchTerm={searchTerm} filter={filter} />
    </div>
  );
};

export default HomePage;
