import React, { createContext, useContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { red } from "@mui/material/colors";
import { Provider } from 'react-redux';
import { store } from "../redux-store/store";

type AppThemeProviderProps = {
  children: ReactNode;
};

//1) Create a context for managing the theme state.
  const ThemeContext = createContext(
    {
      mode: "light",
      toggleThemeMode: () => {},
    }
  );

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
} 

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
//2) create/provide a way to toggle
const [mode, setMode] = useState<"light" | "dark">("light");

const toggleThemeMode = () => {
  setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
}

 const theme = createTheme({
  palette: {
        mode: mode,
  primary: {
        main: red[100],
        
      },
   },
 });

 return (
   <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
     <ThemeProvider theme={theme}>
       <CssBaseline />
       {children}
     </ThemeProvider>
   </ThemeContext.Provider>
 );
 }

  let root = null;

  const element = (document.getElementById('root') as HTMLElement)
  
  if(!root){
    root = ReactDOM.createRoot(element);
  }

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppThemeProvider>
  </React.StrictMode>,
 );
