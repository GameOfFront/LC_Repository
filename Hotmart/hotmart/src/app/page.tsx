// src/app/page.tsx
import React from 'react';
import Home from './Home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | HotmarTest'
}

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
