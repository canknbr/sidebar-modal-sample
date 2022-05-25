import React from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
const Home = () => {
  const { isModalOpen, isSidebarOpen } = useGlobalContext();

  return (
    <main>
      <button onClick={isSidebarOpen} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={isModalOpen} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
