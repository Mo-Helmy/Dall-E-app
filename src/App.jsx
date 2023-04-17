import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    <footer className="w-full flex justify-center items-center bg-white px-6 py-12 text-center">
      <p className="text-center">
        Copyright © {new Date().getFullYear()} All rights reserved | This
        project is made with{' '}
        <span style={{ color: 'tomato', fontWeight: 'bold', fontSize: '24px' }}>
          ♡
        </span>{' '}
        by{' '}
        <a
          href="https://mohelmy-portfolio.vercel.app/"
          style={{ color: 'tomato', fontWeight: 'bold' }}
        >
          Mo.Helmy
        </a>
      </p>
    </footer>
  </BrowserRouter>
);

export default App;
