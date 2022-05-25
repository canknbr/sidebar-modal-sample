import React, { useContext } from 'react';
const SidebarContext = React.createContext();

const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const isSidebarOpen = () => {
    setSidebar(true);
  };
  const isSidebarClose = () => {
    setSidebar(false);
  };
  const isModalOpen = () => {
    setModal(true);
  };
  const isModalClose = () => {
    setModal(false);
  };
  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isSidebarClose,
        isModalOpen,
        isModalClose,
        sidebar,
        modal,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SidebarContext);
};
export default SidebarProvider;
