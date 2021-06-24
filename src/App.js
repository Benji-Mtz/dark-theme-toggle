import { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';

const StyledApp = styled.div`
  color: ${ (props) => props.theme.fontColor };
`;


function App() {

  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider
      theme={theme === "light" ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <StyledApp>Hello World</StyledApp>
      <button
        onClick={ () => themeToggler() }
      >Change Theme</button>
    </ThemeProvider>
  );
}

export default App;
