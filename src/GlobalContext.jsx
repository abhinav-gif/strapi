import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();
const defaultState = { isSideBarOpen: false, pageId: null };

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const closeSideBar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };
  const openSideBar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const setPageId = (id) => {
    dispatch({ type: "SET_PAGEID", payload: { id } });
  };
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen: state.isSideBarOpen,
        pageId: state.pageId,
        closeSideBar,
        openSideBar,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
