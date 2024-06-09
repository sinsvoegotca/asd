import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/api';
import UserCard from './UserCard';

const UserList = ({ searchTerm, filter }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers(currentPage);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    };

    getUsers();
  }, [currentPage]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesFilter = true;
    if (filter === 'even') matchesFilter = user.id % 2 === 0;
    if (filter === 'odd') matchesFilter = user.id % 2 !== 0;
    if (filter === 'startsWithA') matchesFilter = user.first_name.toLowerCase().startsWith('a');
    if (filter === 'notStartsWithA') matchesFilter = !user.first_name.toLowerCase().startsWith('a');

    return matchesSearch && matchesFilter;
  });

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) setCurrentPage(currentPage - 1);
    if (direction === 'next' && currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <div>
        <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Назад</button>
        <span>Страница {currentPage} из {totalPages}</span>
        <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>Вперед</button>
      </div>
    </div>
  );
};

export default UserList;
