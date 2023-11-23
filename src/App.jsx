import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
