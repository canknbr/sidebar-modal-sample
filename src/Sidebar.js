import React from 'react';
import { useGlobalContext } from './context';
import { links, social } from './data';
import { FaTimes } from 'react-icons/fa';
const Sidebar = () => {
  const { sidebar, isSidebarClose } = useGlobalContext();
  return (
    <aside className={`${sidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <p className="logo">logo</p>
        <button onClick={isSidebarClose} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
