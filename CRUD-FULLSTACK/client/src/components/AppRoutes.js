import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const LogUpPage = lazy(() => import('../pages/LogUpPage'));
const GroupsPage = lazy(() => import('../pages/GroupsPage'));
const UserProfile = lazy(() => import('../components/UserProfile'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/group-create" element={<GroupsPage />} />
      <Route path="/registration" element={<LogUpPage />} />
      <Route path="/users/:idUser" element={<UserProfile />} />
    </Routes>
  );
};

export default AppRoutes;
