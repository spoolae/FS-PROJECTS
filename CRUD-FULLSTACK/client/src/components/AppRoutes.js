import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const AddUserPage = lazy(() => import('../pages/AddUserPage'));
const GroupsPage = lazy(() => import('../pages/GroupsPage'));
const UserProfilePage = lazy(() => import('../pages/UserProfilePage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/group-create" element={<GroupsPage />} />
      <Route path="/registration" element={<AddUserPage />} />
      <Route path="/users/:idUser" element={<UserProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
